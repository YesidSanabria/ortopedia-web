import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  // Este método lee el archivo JSON y devuelve los datos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.slug === slug))
    );
  }
}