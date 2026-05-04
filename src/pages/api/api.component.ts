import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersComponent } from '../../components/users/users.component';

@Component({
  selector: 'app-api-page',
  styleUrls: ['./api.component.scss'],
  templateUrl: './api.component.html',
  imports: [UsersComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiPageComponent {}
