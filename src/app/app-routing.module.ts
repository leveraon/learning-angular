import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./demo-home-page/demo-home-page.component').then(
        (m) => m.DemoHomePageComponent
      ),
  },
  {
    path: 'drag',
    loadComponent: () =>
      import('./examples/drag-drop/drag-drop.component').then(
        (m) => m.DragDropComponent
      ),
  },
  {
    path: 'expand-panel',
    loadComponent: () =>
      import('./examples/expand-panel/expand-panel.component').then(
        (m) => m.ExpandPanelComponent
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
      import('./examples/calendar/calendar.component').then(
        (m) => m.CalendarComponent
      ),
  },
  {
    path: 'csv-output',
    loadComponent: () =>
      import('./examples/csv-ouput/csv-ouput.component').then(
        (m) => m.CsvOuputComponent
      ),
  },
  {
    path: 'scheduler',
    loadComponent: () =>
      import('./examples/scheduler/scheduler.component').then(
        (m) => m.SchedulerComponent
      ),
  },
  {
    path: 'markdown',
    loadComponent: () =>
      import('./examples/marked/marked.component').then(
        (m) => m.MarkedComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
