import { Component, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

class RatingStar {
  iconName: string;
  isSelected: boolean;

  constructor() {
    this.iconName = 'star_outline';
    this.isSelected = false;
  }

  setSelection(isSelected: boolean): void {
    this.isSelected = isSelected;
    this.iconName = isSelected ? 'star' : 'star_outline';
  }
}

const MAX_RATING = 5;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements OnChanges, ControlValueAccessor {
  ratingStars: RatingStar[] = [];
  rating = 0;

  isDisabled: boolean = false;

  onChangeFn: any;
  onTouchFn: any;

  constructor() {
    for (let index = 0; index < MAX_RATING; index++) {
      this.ratingStars.push(new RatingStar());
    }
  }

  writeValue(value: number): void {
    this.rating = value;
    this.updateRatingStars();
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchFn = fn;
  }

  ngOnChanges(): void {
    this.updateRatingStars();
  }

  setRating(rating: number): void {
    if (this.isDisabled) {
      return;
    }

    this.rating = rating;

    this.updateRatingStars();
    this.onTouchFn();
    this.onChangeFn(this.rating);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private updateRatingStars(): void {
    const ratingIndex = this.rating - 1;

    for (let index = 0; index < this.ratingStars.length; index++) {
      const star = this.ratingStars[index];

      const isSelected = index <= ratingIndex;
      star.setSelection(isSelected);
    }
  }
}
