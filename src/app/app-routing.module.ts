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
      import('./drag-drop/drag-drop.module').then((m) => m.DragDropModule),
  },
  {
    path: 'expand-panel',
    loadChildren: () =>
      import('./expand-panel/expand-panel.module').then(
        (m) => m.ExpandPanelModule
      ),
  },
  {
    path: 'book-list',
    loadChildren: () =>
      import('./book-list/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'search-bar',
    loadComponent: () =>
      import('./icon-search-bar/icon-search-bar.component').then(
        (m) => m.IconSearchBarComponent
      ),
  },
  {
    path: 'plot-chart',
    loadComponent: () =>
      import('./plot-chart/plot-chart.component').then(
        (m) => m.PlotChartComponent
      ),
  },
  {
    path: 'checkbox-tree',
    loadComponent: () =>
      import(
        './checkbox-tree-with-filter/checkbox-tree-with-filter.component'
      ).then((m) => m.CheckboxTreeWithFilterComponent),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar.component').then((m) => m.CalendarComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
