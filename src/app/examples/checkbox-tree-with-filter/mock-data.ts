import { TodoItemNode } from './models';

export const TREE_DATA: TodoItemNode[] = [
  {
    item: 'Fruit',
    children: [{ item: 'Apple' }, { item: 'Banana' }, { item: 'Fruit loops' }],
  },
  {
    item: 'Vegetables',
    children: [
      {
        item: 'Green',
        children: [{ item: 'Broccoli' }, { item: 'Brussels sprouts' }],
      },
      {
        item: 'Orange',
        children: [{ item: 'Pumpkins' }, { item: 'Carrots' }],
      },
    ],
  },
];
