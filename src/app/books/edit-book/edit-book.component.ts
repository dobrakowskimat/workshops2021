import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  id$!: Observable<number | null>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(d => console.log(d));

    this.id$ = this.route.paramMap.pipe(
      map(pm => pm.get('id')),
      map(id => id == null ? null : parseInt(id as string))
    );
  }

  returnToBookList(): void {
    this.router.navigate(['']);
  }

}
