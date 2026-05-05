import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestAsyncPipe } from '../../pipes/customAsyncPipe.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-something-page',
  templateUrl: './something.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TestAsyncPipe],
})
export class SomethingPage {
  // public data: string = 'qqqqqqqwwwweeee';
  public data$ = new Observable((subscriber) => {
    let counter = 0;
    const id = setInterval(() => {
      subscriber.next(counter++);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });
}
