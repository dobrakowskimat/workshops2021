import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  bookForm: FormGroup;
  isLoading = false;

  localTitle: string = '';

  @Input() id: number|null = null;

  @Output() formSubmitted = new EventEmitter<void>();

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) {
    this.bookForm = this.fb.group({
      title: [
        '',
        {
          validators: [Validators.required, Validators.minLength(2)],
          asyncValidators: (c: AbstractControl) => this.notDuplicated(c),
          updateOn: 'blur',
        },
      ],
      authorFirstName: [''],
      authorLastName: [''],
      publicationDateUtc: [''],
      isbn: ['', [Validators.required, this.validateIsbnWithParam('123')]],
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.bookService
        .getBookById(this.id)
        .subscribe((b) => this.bookForm.patchValue(b));
    }

    this.bookForm.controls.title.valueChanges.subscribe((value) => {
      if (value === 'Email') {
        this.bookForm.addControl('email', this.fb.control(''));
      }
    });
  }

  onSubmit() {
    if (!this.bookForm.valid) {
      return;
    }

    this.isLoading = true;
    if (!!this.id) {
      this.bookService
        .editBook({ ...this.bookForm.value, id: this.id })
        .pipe(tap(() => this.formSubmitted.emit()))
        .subscribe();
    } else {
      this.bookService
        .addBook(this.bookForm.value)
        .pipe(tap(() => this.formSubmitted.emit()))
        .subscribe();
    }
  }

  private validateIsbn(control: AbstractControl): ValidationErrors | null {
    const isbn = control.value as string;

    if (!isbn) {
      return null;
    }

    if (isbn.startsWith('978')) {
      return null;
    }

    return { invalidPrefix: true };
  }

  private validateIsbnWithParam(requiredPrefix: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isbn = control.value as string;

      if (!isbn) {
        return null;
      }

      if (isbn.startsWith(requiredPrefix)) {
        return null;
      }

      return { invalidPrefix: true };
    };
  }

  private notDuplicated(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const title = control.value as string;

    if (!title) {
      return of(null);
    }

    return this.bookService
      .isTitleDuplicated(title)
      .pipe(
        map((isDuplicated) => (isDuplicated ? { duplicatedTitle: true } : null))
      );
  }
}
