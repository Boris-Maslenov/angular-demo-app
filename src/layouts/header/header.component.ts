import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
