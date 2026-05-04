import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Calculator } from '../../components/calculator/calculator.component';
import { MyDirective } from '../../directive/my-directive.directive';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [Calculator, MyDirective],
})
export class MainPageComponent {}
