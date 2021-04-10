import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamaBankService } from '../services/gama.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private gamaService: GamaBankService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.gamaService.getToken()
      }
    });

    return next.handle(request);
  }
}
