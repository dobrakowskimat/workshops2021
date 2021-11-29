import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}api/Users`);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.httpClient.delete<unknown>(
      `${environment.apiUrl}api/Users/${id}`
    );
  }
}
