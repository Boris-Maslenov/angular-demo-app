import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../model/user.model';

interface UserData {
  users: User[];
  loading: boolean;
  error: string | null;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [AsyncPipe, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  private readonly api = inject(ApiService);
  public users$?: Observable<UserData>;

  public ngOnInit(): void {
    this.users$ = this.api.getUsers().pipe(
      map((users) => ({
        loading: false,
        error: null,
        users,
      })),

      startWith({
        loading: true,
        error: null,
        users: [],
      }),

      catchError(() =>
        of({
          loading: false,
          error: 'Не удалось загрузить пользователей',
          users: [],
        }),
      ),
    );

    // .subscribe({
    //   next: (users) => {
    //     console.log('users получены: ', users);
    //   },
    //   error: () => {},
    //   complete: () => {},
    // });
  }
}
