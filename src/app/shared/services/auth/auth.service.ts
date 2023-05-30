import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API } from "../../enums/api.enum";
import { Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {

  private token: string | null = null

  readonly loginUrl = '/login'
  readonly registerUrl = '/register'

  public isAuth = JSON.parse(localStorage.getItem('isAuth') as string)

  constructor(private router: Router, private http: HttpClient) {

  }

  public login(user): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${API.MainAPI}${this.loginUrl}`, user)
    .pipe(
      tap(({token}) => {
        localStorage.setItem('auth-token', token)
        this.setToken(token)
        if (token) {
          this.router.navigate(['/app/users'])
        }
      })
    )
  }

  public register(user): Observable<{id: number, token: string}> {
    return this.http.post<{id: number, token: string}>(`${API.MainAPI}${this.registerUrl}`, user)
  }

  private setToken(token: string | null) {
    this.token = token
  }

  public getToken(): string | null {
    return this.token
  }

  public logout() {
    this.setToken(null)
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

  public isAuthenticated(): boolean {
    return !!this.token
  }
}
