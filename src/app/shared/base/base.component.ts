import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ContaUsuario } from "../models/banco.contausuario.model";
import { Sessao } from "../models/sessao.model";
import { GamaBankService } from "../services/gama.service";

@Component({
    selector: 'app-base',
    template: ''
})

export class BaseComponent implements OnInit {

    public loading!: boolean;

    public sessao!: Sessao; 

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

    estaLogado(): boolean {

        return this.gamaService.estaLogado();

    }

}
  