import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, CommonModule, MatInputModule, MatButtonModule],
})
export class Calculator {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  operators = ['+', '-', '*', '/'];
  operator: string = '+';

  calc() {
    switch (this.operator) {
      case '+': {
        this.c = Number(this.a) + Number(this.b);
        break;
      }
      case '-': {
        this.c = this.a - this.b;
        break;
      }
      case '*': {
        this.c = this.a * this.b;
        break;
      }
      case '/': {
        if (this.b == 0) {
          alert('На 0 делить нельзя');
          this.c = 0;
          return;
        }
        this.c = this.a / this.b;
        break;
      }
      default: {
        alert('Ошибка');
      }
    }
  }
}
