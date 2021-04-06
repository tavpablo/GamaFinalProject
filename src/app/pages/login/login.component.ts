import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(public loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {}

  autenticar(login:Login)
  {
    this.loginService.autenticar(login)
    .subscribe(() => {
      this.router.navigate(['/dash'])
    });
  }
}
