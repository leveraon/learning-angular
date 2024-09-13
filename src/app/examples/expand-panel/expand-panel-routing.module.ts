import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandPanelComponent } from './expand-panel.component';

const routes: Routes = [{
  path: '',
  component: ExpandPanelComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpandPanelRoutingModule { }
