import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book-dialog-wrapper',
  templateUrl: './edit-book-dialog-wrapper.component.html',
  styleUrls: ['./edit-book-dialog-wrapper.component.scss']
})
export class EditBookDialogWrapperComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number | null },
    public dialogRef: MatDialogRef<EditBookDialogWrapperComponent>,
    ) { }

  ngOnInit(): void {
  }

  formSubmitted() {
    this.dialogRef.close();
  }
}
