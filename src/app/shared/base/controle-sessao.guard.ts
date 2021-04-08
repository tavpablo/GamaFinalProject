import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GamaBankService } from '../services/gama.service';

@Injectable({
  providedIn: 'root'
})

export class ControleSessaoGuard implements CanActivate {

  constructor(private gamaService: GamaBankService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.gamaService.estaLogado();
  }
  
}
