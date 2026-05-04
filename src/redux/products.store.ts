import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  switchMap,
  catchError,
  debounceTime,
  distinctUntilChanged,
  pipe,
  tap,
  EMPTY,
} from 'rxjs';

import { ApiService } from '../services/api.service';
import { inject } from '@angular/core';
import { Product } from '../model/product.model';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  query: string;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  query: '',
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const api = inject(ApiService);
    return {
      loadProducts: () => {
        patchState(store, {
          loading: true,
          error: null,
        });
        api.getProducts().subscribe({
          next: (response) => {
            patchState(store, {
              products: response.products,
              loading: false,
              error: null,
            });
          },
          error: () => {
            patchState(store, {
              loading: false,
              error: 'Не удалось загрузить товары',
            });
          },
        });
      },
      searchProducts: rxMethod<string>(
        pipe(
          debounceTime(250),
          distinctUntilChanged(),
          tap((query) => {
            patchState(store, {
              query,
              loading: true,
              error: null,
            });
          }),
          switchMap((query) => {
            return api.searchProducts(query).pipe(
              tap((resp) => {
                patchState(store, {
                  query,
                  loading: false,
                  error: null,
                  products: resp.products,
                });
              }),
              catchError((error) => {
                console.log('catchError', error);
                return EMPTY;
              }),
            );
          }),
        ),
      ),
    };
  }),
);
