import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, take } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/models/banco.usuario.model';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConfirmedValidator } from 'src/app/shared/base/confirmed.validators';
import { CpfCnpjValidator } from 'src/app/shared/base/cpfcnpj.validators';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends BaseComponent {

  cadastroForm!: FormGroup; 

  ngOnInit(): void {

    this.cadastroForm = new FormBuilder().group({
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^(\d{3}){3}\d{2}$/), CpfCnpjValidator.validate]),
      login: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
      senhaConfirmacao: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, { validators: ConfirmedValidator('senha', 'senhaConfirmacao') });

  }

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

          localStorage.setItem('GamaMessage', 'Usuário cadastrado com sucesso!');
          const dialog = this._dialog.open(DialogComponent);
          dialog.afterClosed().subscribe(() => this.router.navigate(['/login']));

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