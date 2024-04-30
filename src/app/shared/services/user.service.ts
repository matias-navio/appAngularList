import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUsers: any[] = [];
  private readonly _http = inject(HttpClient);
  
  getUsers(): Observable<any[]>{
    return this._http.get<any[]>('https://fakestoreapi.com/users');
  }
}
