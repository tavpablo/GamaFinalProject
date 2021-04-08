import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GamaBankService } from '../services/gama.service';

@Injectable({
  providedIn: 'root'
})

export class ControleSessaoGuard implements CanActivate {

  constructor(private gamaService: GamaBankService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const estaLogado = this.gamaService.estaLogado();
    if (!estaLogado) this.router.navigate(['login']);
    return estaLogado;
  }
  
}
