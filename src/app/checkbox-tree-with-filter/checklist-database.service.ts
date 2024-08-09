import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItemNode } from './models';

@Injectable()
export class ChcklistDatabaseService {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);
  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor() {}

  initialize(treeData: TodoItemNode[]) {
    // Build the tree nodes from Json object  . The result is a list of `TodoItemNode` with nested
    //     file node as children.
    // Notify the change.
    this.dataChange.next(treeData);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: { [key: string]: any }, level: number): any[] {
    return Object.keys(obj).reduce<any[]>((accumulator, key) => {
      const value = obj[key];
      const node: TodoItemNode = {} as TodoItemNode;
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat({
        ...node,
        otherInfo: key,
      });
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}
