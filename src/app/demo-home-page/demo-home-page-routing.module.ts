import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomePageComponent } from './demo-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: DemoHomePageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoHomePageRoutingModule { }
