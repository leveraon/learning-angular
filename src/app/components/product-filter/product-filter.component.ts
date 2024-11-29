import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@lat-shared/models/dictionary';
import { CdkAccordionModule } from '@angular/cdk/accordion';

const SORT_OPTIONS: string[] = [
  'Most Popular',
  'Best Rating',
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
];

const FILTER_OPTIONS: Dictionary<string[]> = {
  Color: ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple'],
  Category: ['New Arrivals', 'Sale', 'Travel', 'Organization', 'Accessories'],
  Size: ['S', 'M', 'L', 'XL', 'XXL'],
};
@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, CdkAccordionModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent implements OnInit {
  sortOptions: string[] = [];
  colorOptions: string[] = [];
  sideBarFilters: { filterKey: string; filterOptions: string[] }[] = [];

  ngOnInit(): void {
    this.sortOptions = SORT_OPTIONS;
    this.colorOptions = Object.keys(FILTER_OPTIONS)
      .filter((key) => key === 'Color')
      .flatMap((key) => FILTER_OPTIONS[key].map((value) => value));

    this.sideBarFilters = Object.keys(FILTER_OPTIONS).flatMap((key) => ({
      filterKey: key,
      filterOptions: FILTER_OPTIONS[key].map((value) => value),
    }));
  }
}
