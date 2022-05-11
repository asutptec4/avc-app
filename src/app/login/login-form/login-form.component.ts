import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';

import { login, selectError } from '../../core/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  userName: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(private snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectError)
      .pipe(
        filter((error) => !!error),
        tap(() => {
          this.snackBar.open('Login or password are incorrect', 'Hide', {
            duration: 3000
          });
        })
      )
      .subscribe();
  }

  onLoginClick(): void {
    this.store.dispatch(login({ credentials: { username: this.userName, password: this.password } }));
  }
}
