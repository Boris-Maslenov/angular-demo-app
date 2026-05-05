import {
  ChangeDetectorRef,
  inject,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { Observable, Subscription, isObservable } from 'rxjs';

@Pipe({
  name: 'testAsync',
  pure: false,
})
export class TestAsyncPipe<T> implements PipeTransform, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private subscription: Subscription | undefined = undefined;
  private lastObservable: Observable<T> | undefined;
  private lastValue: T | undefined = undefined;

  transform(value: Observable<T> | undefined | null): T | null | undefined {
    if (value === null || value === undefined) {
      return value;
    }

    if (!isObservable(value)) {
      throw new Error('testAsync ожидает значение Observable');
    }

    if (value !== this.lastObservable) {
      this.subscription?.unsubscribe();
      this.lastObservable = value;

      this.subscription = value.subscribe((v) => {
        this.lastValue = v;
        this.cdr.detectChanges();
      });
    }

    return this.lastValue;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
