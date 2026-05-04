import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { User } from '../model/user.model';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly productsUrl = 'https://dummyjson.com/products';

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  public getProducts(): Observable<ProductsResponse> {
    return this.httpClient.get<ProductsResponse>(this.productsUrl);
  }

  public searchProducts(q: string) {
    return this.httpClient.get<ProductsResponse>(`${this.productsUrl}/search`, {
      params: {
        q,
      },
    });
  }
}
