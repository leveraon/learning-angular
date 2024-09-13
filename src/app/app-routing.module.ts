import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./demo-home-page/demo-home-page.module').then(
        (m) => m.DemoHomePageModule
      ),
  },
  {
    path: 'drag',
    loadChildren: () =>
      import('./examples/drag-drop/drag-drop.module').then((m) => m.DragDropModule),
  },
  {
    path: 'expand-panel',
    loadChildren: () =>
      import('./examples/expand-panel/expand-panel.module').then(
        (m) => m.ExpandPanelModule
      ),
  },
  {
    path: 'book-list',
    loadChildren: () =>
      import('./examples/book-list/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'search-bar',
    loadComponent: () =>
      import('./examples/icon-search-bar/icon-search-bar.component').then(
        (m) => m.IconSearchBarComponent
      ),
  },
  {
    path: 'plot-chart',
    loadComponent: () =>
      import('./examples/plot-chart/plot-chart.component').then(
        (m) => m.PlotChartComponent
      ),
  },
  {
    path: 'checkbox-tree',
    loadComponent: () =>
      import(
        './examples/checkbox-tree-with-filter/checkbox-tree-with-filter.component'
      ).then((m) => m.CheckboxTreeWithFilterComponent),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./examples/calendar/calendar.component').then((m) => m.CalendarComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
