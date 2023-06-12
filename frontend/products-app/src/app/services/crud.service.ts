import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private REST_API = 'http://localhost:7070/api/products';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.REST_API, {
      headers: this.httpHeaders,
    });
  }

  getProduct(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${this.REST_API}/${id}`, { headers: this.httpHeaders })
      .pipe(
        map((res: any) => {
          return res || {};
        })
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.REST_API, product, { headers: this.httpHeaders })
      .pipe(catchError(this.errorHandler));
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.REST_API}/${id}`, product, {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http
      .delete<Product>(`${this.REST_API}/${id}`, { headers: this.httpHeaders })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}. ${error.message}`;
    }
    return throwError(() => {
      errorMessage;
    });
  }
}
