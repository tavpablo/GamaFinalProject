import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ContaUsuario } from "../models/banco.contabancaria.model";
import { GamaBankService } from "../services/gama.service";

@Component({
    selector: 'app-base',
    template: ''
})

export class BaseComponent implements OnInit {

    public loading!: boolean;

    constructor(protected gamaService: GamaBankService, 
        protected router: Router,
        protected _dialog: MatDialog,
        protected _snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }

    setLocalStorage(contaUsuario: ContaUsuario) {
        localStorage.setItem('token', contaUsuario.token);
        localStorage.setItem('usuario', contaUsuario.usuario.nome);
        localStorage.setItem('cpf', contaUsuario.usuario.cpf);
    }

}
  