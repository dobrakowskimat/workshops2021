import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { BookActions } from '../store';
import { getIsBookEditLoading, getIsBooksLoading } from '../store/book.reducer';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  bookForm: FormGroup;
  isLoading$: Observable<boolean>;

  localTitle: string = '';

  @Input() id: number | null = null;

  @Output() formSubmitted = new EventEmitter<void>();

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private store: Store
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
      tags: this.fb.array([]),
    });
    this.isLoading$ = this.store.select(getIsBookEditLoading);
    this.isLoading$.subscribe((a) => console.log('value isLoading' + a));
  }

  ngOnInit(): void {
    if (this.id) {
      this.bookService.getBookById(this.id).subscribe((b) => {
        if (b.tags?.length) {
          b.tags.forEach(() => this.addTag());
        }
        this.bookForm.patchValue(b);
      });
    }

    this.bookForm.controls.title.valueChanges.subscribe((value) => {
      if (value === 'Email') {
        this.bookForm.addControl('email', this.fb.control(''));
      }
    });
  }

  get tags(): FormArray {
    return this.bookForm.get('tags') as FormArray;
  }

  addTag(): void {
    const tagControl = this.fb.control('');
    this.tags.push(tagControl);
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  onSubmit() {
    if (!this.bookForm.valid) {
      return;
    }

    if (!!this.id) {
      this.store.dispatch(
        BookActions.updateBook({
          book: { ...this.bookForm.value, id: this.id },
        })
      );
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
