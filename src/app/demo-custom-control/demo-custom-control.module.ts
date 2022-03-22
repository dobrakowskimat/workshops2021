import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { RatingComponent } from './rating/rating.component';
import { DemoCustomControlRoutingModule } from './demo-custom-control-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoFormComponent, RatingComponent],
  imports: [
    CommonModule,
    DemoCustomControlRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DemoCustomControlModule {}
