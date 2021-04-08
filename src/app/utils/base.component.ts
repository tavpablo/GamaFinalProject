import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { GamaBankService } from "../services/gama.service";

@Component({
    selector: 'app-base',
    template: ''
})

export class BaseComponent implements OnInit {

    public loading!: boolean;

    constructor(protected gamaService: GamaBankService, 
        protected router: Router,
        protected _snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }

}
  