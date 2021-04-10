import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, take } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConfirmedValidator } from 'src/app/shared/base/confirmed.validators';
import { CpfCnpjValidator } from 'src/app/shared/base/cpfcnpj.validators';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.component.html',
  styleUrls: ['./recoverypass.component.scss']
})

export class RecoverypassComponent extends BaseComponent {

  senhaForm!: FormGroup; 

  ngOnInit(): void {

    this.loading = false;

    this.senhaForm = this.fb.group({
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^(\d{3}){3}\d{2}$/), CpfCnpjValidator.validate]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
      senhaConfirmacao: new FormControl('', [Validators.required, Validators.minLength(5)])
    }, { validators: ConfirmedValidator('senha', 'senhaConfirmacao') });

  }

  recoverPassword()
  {
    if (!this.senhaForm.invalid)
    {
      this.loading = true;
      this.gamaService.alterarSenha(this.senhaForm.get('cpf')?.value, this.senhaForm.get('senha')?.value)
        .pipe(
          take(1),
          finalize(() => { this.loading = false; })
        )
        .subscribe(_response => {

          localStorage.setItem('GamaMessage', 'Senha alterada com sucesso!');
          const dialog = this._dialog.open(DialogComponent);
          dialog.afterClosed().subscribe(() => this.router.navigate(['/login']));

        }, error => {
          //console.log(error.error.error);
          this._snackBar.open('Não foi possível alterar a senha (possível erro de interface na especificação entre figma e swagger).', '', {
            duration: 5000
          });
        });
    } else 
    {
      var msg: string;

      if (this.senhaForm.get('cpf')?.invalid || 
        this.senhaForm.get('senha')?.invalid)
        msg = 'Informe todos os campos corretamente!';
      else msg = 'As senhas digitadas não conferem!';

      this._snackBar.open(msg, '', {
        duration: 1000
      });
    }
  }

}
