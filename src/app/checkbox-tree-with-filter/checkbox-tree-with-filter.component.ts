import { SelectionModel } from '@angular/cdk/collections';
import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTreeFlatDataSource, MatTreeModule } from '@angular/material/tree';
import { ChcklistDatabaseService } from './checklist-database.service';
import { TREE_DATA } from './mock-data';
import { TodoItemFlatNode, TodoItemNode } from './models';
import { TreeFlattenerService } from './tree-flattener.service';

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-checkbox-tree-with-filter',
  standalone: true,
  imports: [
    CdkTreeModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatTreeModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './checkbox-tree-with-filter.component.html',
  styleUrl: './checkbox-tree-with-filter.component.scss',
  providers: [ChcklistDatabaseService, TreeFlattenerService],
})
export class CheckboxTreeWithFilterComponent {
  searchString = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.item === '';

  constructor(
    private _database: ChcklistDatabaseService,
    private _treeFlattener: TreeFlattenerService
  ) {
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      _treeFlattener.getLevel,
      _treeFlattener.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      _treeFlattener.treeFlattener()
    );
    this._database.initialize(TREE_DATA);

    _database.dataChange.subscribe((data) => {
      this.dataSource.data = data;

      this.treeControl.expand(this.treeControl.dataNodes[0]);
    });
  }

  // search filter logic start
  filterLeafNode(node: TodoItemFlatNode): boolean {
    if (!this.searchString) {
      return false;
    }
    return (
      node.item.toLowerCase().indexOf(this.searchString?.toLowerCase()) === -1
    );
  }

  filterParentNode(node: TodoItemFlatNode): boolean {
    if (
      !this.searchString ||
      node.item.toLowerCase().indexOf(this.searchString?.toLowerCase()) !== -1
    ) {
      return false;
    }
    const descendants = this.treeControl.getDescendants(node);

    if (
      descendants.some(
        (descendantNode) =>
          descendantNode.item
            .toLowerCase()
            .indexOf(this.searchString?.toLowerCase()) !== -1
      )
    ) {
      return false;
    }

    return true;
  }
  // search filter logic end

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  descendantsItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  leafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this._treeFlattener.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this._treeFlattener.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
