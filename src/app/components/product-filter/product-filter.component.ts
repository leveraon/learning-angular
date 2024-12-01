import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, OnInit } from '@angular/core';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@lat-shared/mock/product-filter';

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
