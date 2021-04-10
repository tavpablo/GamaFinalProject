import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { timer } from "rxjs";
import { ContaUsuario } from "../models/banco-contausuario.model";
import { Sessao } from "../models/sessao.model";
import { GamaBankService } from "../services/gama.service";

@Component({
    selector: 'app-base',
    template: ''
})

export class BaseComponent implements OnInit {

    public loading!: boolean;

    public sessao: Sessao = this.getSessao(); 

    constructor(protected gamaService: GamaBankService, 
        protected router: Router,
        protected fb: FormBuilder,
        protected _dialog: MatDialog,
        protected _snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }

    getSessao(): Sessao {
        return this.gamaService.getSessao();
    }

    setSessao(contaUsuario: ContaUsuario) {

        this.gamaService.setSessao(contaUsuario);

    }

    desconectar() {

        this.gamaService.desconectar(); 
        this.router.navigate(['home']);

    }

    estaLogado(): boolean {

        return this.gamaService.estaLogado();

    }

    validarCamposFormulario(form: FormGroup)
    {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormControl) control.markAsTouched();
            else if (control instanceof FormGroup) this.validarCamposFormulario(control);
        });
    }

}
  