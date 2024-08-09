/**
 * Node for to-do item
 */
export interface TodoItemNode {
  children?: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export interface TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}
