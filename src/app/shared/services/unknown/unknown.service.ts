import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../enums/api.enum';
import { ResUnknownI, UnknownI } from '../../interfaces/unknown.interface';

@Injectable({
  providedIn: 'root'
})
export class UnknownService {

  readonly unknown = '/unknown';

  constructor(private http: HttpClient) {
   }

   public getUnknown(): Observable<ResUnknownI> {
    return this.http.get<ResUnknownI>(API.MainAPI + this.unknown)
  }

  removeUnknown(id): Observable<ResUnknownI> {
    return this.http.delete<ResUnknownI>(`${API.MainAPI}${this.unknown}/${id}`)
  }

  changeUnknownData(data): Observable<UnknownI> {
    return this.http.put<UnknownI>(`${API.MainAPI}${this.unknown}/${data.id}`, data)
  }
}
