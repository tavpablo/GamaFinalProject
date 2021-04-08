import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/banco.usuario.model';
import { GamaBankService } from 'src/app/services/gama.service';
import { BaseComponent } from 'src/app/utils/base.component';
import { ConfirmedValidator } from 'src/app/utils/confirmed.validators';
import { CpfCnpjValidator } from 'src/app/utils/cpfcnpj.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends BaseComponent {

  cadastroForm!: FormGroup; 

  constructor(protected gamaService: GamaBankService, 
    protected router: Router,
    protected _snackBar: MatSnackBar,
    private fb: FormBuilder) { 

      super(gamaService, router, _snackBar);
      this.cadastroForm = fb.group({
        cpf: new FormControl('', [Validators.required, Validators.pattern(/^(\d{3}){3}\d{2}$/), CpfCnpjValidator.validate]),
        login: new FormControl('', [Validators.required, Validators.minLength(5)]),
        nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
        senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
        senhaConfirmacao: new FormControl('', [Validators.required, Validators.minLength(5)])
      }, { validators: ConfirmedValidator('senha', 'senhaConfirmacao') });

  }

  ngOnInit(): void {}

  cadastrar(usuario: Usuario)
  {
    if (!this.cadastroForm.invalid)
    {
      this.loading = true;
      this.gamaService.cadastrar(usuario)
        .pipe(
          take(1),
          finalize(() => { this.loading = false; })
        )
        .subscribe(_response => {
          this.router.navigate(['/dash'])
        }, error => {
          this._snackBar.open(error.error.error, '', {
            duration: 5000
          });
        });
    } else 
    {
      var msg: string;

      if (this.cadastroForm.get('cpf')?.invalid || 
        this.cadastroForm.get('login')?.invalid || 
        this.cadastroForm.get('nome')?.invalid || 
        this.cadastroForm.get('senha')?.invalid)
        msg = 'Informe todos os campos corretamente!';
      else msg = 'As senhas digitadas não conferem!';

      this._snackBar.open(msg, '', {
        duration: 1000
      });
    }
  }
}
