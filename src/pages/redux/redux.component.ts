import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  setValue,
} from '../../redux/counter.action';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-redux-page',
  templateUrl: './redux.component.html',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduxPageComponent {
  private readonly store: Store<{ count: number }> = inject(Store);
  // так же можно работать по старинке с rxjs подходом через select
  count: Signal<number> = this.store.selectSignal((state) => state.count);

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

  public setRandom() {
    const value = Math.ceil(Math.random() * 100);
    this.store.dispatch(setValue({ value }));
  }
}
