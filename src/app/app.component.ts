import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workshops2021';

  loggedIn = false;
  displayName$!: Observable<string>;

  constructor(private authService: MsalService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.loginIfRequired()
  }

  loginIfRequired() {
    this.authService.handleRedirectObservable()
      .subscribe(result => {
          const accounts = this.authService.instance.getAllAccounts();
          this.loggedIn = accounts.length > 0;
          if (!this.loggedIn) {
            this.authService.loginRedirect();
          } else {
            this.loadProfile();
          }
      });
  }

  loadProfile() {
    this.displayName$ = this.httpClient.get<{displayName: string}>('https://graph.microsoft.com/v1.0/me/').pipe(
      map(data => data.displayName)
    );
  }
}
