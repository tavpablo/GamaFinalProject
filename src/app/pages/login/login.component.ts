import { Component } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { Login } from '../../shared/models/login.model';
import { finalize, take } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends BaseComponent {

  loginForm!: AbstractControl;

  ngOnInit(): void {

    this.loading = false;

    this.loginForm = this.fb.group({
      usuario: [Validators.required, Validators.minLength(5)],
      senha: [Validators.required, Validators.minLength(5)]
    });

  }

  login(login:Login)
  {
    if (!this.loginForm.invalid)
    {
      this.loading = true;
      this.gamaService.login(login)
        .pipe(
          take(1),
          finalize(() => { this.loading = false; })
        )
        .subscribe(response => {
          this.setSessao(response);
          this.router.navigate(['/dash']);
        }, error => {
          this._snackBar.open('Usuário ou senha inválidos!', '', {
            duration: 5000
          });
        });
    } else 
    {
      this._snackBar.open('Informe um usuário e senha válidos!', '', {
        duration: 1000
      });
    }
  }
}
