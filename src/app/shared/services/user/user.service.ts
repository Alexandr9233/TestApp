import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI, UserResI } from '../../interfaces/user.interface';
import { API } from '../../enums/api.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly users = '/users?page=2';
  readonly userDel = '/users';

  constructor(private http: HttpClient) {}

    public getUsers(): Observable<UserResI> {
      return this.http.get<UserResI>(API.MainAPI + this.users)
    }

    public removeUser(id): Observable<UserResI> {
      return this.http.delete<UserResI>(`${API.MainAPI}${this.userDel}/${id}`)
    }

    public changeUserData(data): Observable<UserI> {
      return this.http.put<UserI>(`${API.MainAPI}${this.userDel}/${data.id}`, data)
    }

}
