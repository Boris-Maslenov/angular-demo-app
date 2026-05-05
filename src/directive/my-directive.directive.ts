import {
  Directive,
  ElementRef,
  HostBinding,
  ChangeDetectorRef,
  DestroyRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[myDirective]',
})
export class MyDirective {
  public colors = [
    'red',
    'orange',
    'gold',
    'blue',
    'green',
    'magenta',
    'black',
  ];
  private cursor = 0;
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  @HostBinding('style.color')
  color = this.colors[this.cursor];

  constructor(private el: ElementRef<HTMLElement>) {
    const intervalId = setInterval(() => {
      this.color = this.colors[this.cursor];

      this.cursor =
        this.cursor === this.colors.length - 1 ? 0 : this.cursor + 1;

      this.cdr.markForCheck();
    }, 1000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }
}
