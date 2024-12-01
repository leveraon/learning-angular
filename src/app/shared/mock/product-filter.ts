import { Dictionary } from '@lat-shared/models/dictionary';

export const SORT_OPTIONS: string[] = [
  'Most Popular',
  'Best Rating',
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
];

export const FILTER_OPTIONS: Dictionary<string[]> = {
  Color: ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple'],
  Category: ['New Arrivals', 'Sale', 'Travel', 'Organization', 'Accessories'],
  Size: ['S', 'M', 'L', 'XL', 'XXL'],
};
