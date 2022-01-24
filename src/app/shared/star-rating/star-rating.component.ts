import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => StarRatingComponent),
  //     multi: true,
  //   },
  // ],
})
export class StarRatingComponent {
  //set disabled styles
  // @Input() disabled = false;
  // @HostBinding('style.opacity')
  // get opacity() {
  //   return this.disabled ? 0.25 : 1;
  // }

  // fill array with false
  stars: boolean[] = Array(5).fill(false);

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
  }

  // Function to call when the rating changes.
  onChange = (rating: number) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  // rate(rating: number) {
  //   if (!this.disabled) {
  //     this.writeValue(rating);
  //   }
  // }

  // // Allows Angular to update the model (rating).
  // // Update the model and changes needed for the view here.
  // writeValue(rating: number): void {
  //   this.stars = this.stars.map((_, i) => rating > i);
  //   this.onChange(this.value);
  // }

  // // Allows Angular to register a function to call when the model (rating) changes.
  // // Save the function as a property to call later here.
  // registerOnChange(fn: (rating: number) => void): void {
  //   this.onChange = fn;
  // }

  // // Allows Angular to register a function to call when the input has been touched.
  // // Save the function as a property to call later here.
  // registerOnTouched(fn: () => void): void {
  //   this.onTouched = fn;
  // }

  // // Allows Angular to disable the input.
  // setDisabledState(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }
}
