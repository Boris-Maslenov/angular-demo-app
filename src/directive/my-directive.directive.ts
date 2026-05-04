import { Directive, ElementRef, HostBinding } from '@angular/core';

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

  constructor(el: ElementRef) {
    this.changeColor(el);
  }

  @HostBinding('style.color') color = this.colors[this.cursor];

  private changeColor(el: ElementRef) {
    console.log('el: ', el);
    setInterval(() => {
      // deprecated
      // el.nativeElement.style.color = this.colors[this.cursor];
      this.color = this.colors[this.cursor];
      if (this.cursor === this.colors.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
    }, 1000);
  }
}
