import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DemoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoCustomControlRoutingModule {}
