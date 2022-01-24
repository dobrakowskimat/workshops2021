import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StarRatingComponent,
  ],
})
export class SharedModule {}
