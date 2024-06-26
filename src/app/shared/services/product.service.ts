import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listaProduct: any[] = [];
  private readonly _http = inject(HttpClient);
  
  getProducts(): Observable<any[]>{

    return this._http.get<any[]>('https://fakestoreapi.com/products');
  }
}
