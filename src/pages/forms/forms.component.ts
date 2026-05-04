import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  imports: [FormsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPageComponent {}
