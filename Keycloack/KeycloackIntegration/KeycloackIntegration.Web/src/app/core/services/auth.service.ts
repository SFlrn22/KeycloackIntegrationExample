import { Injectable, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oidc = inject(OidcSecurityService);

  login() {
    this.oidc.authorize();
  }

  logout() {
    this.oidc.logoff().subscribe();
  }

  isAuthenticated$ = this.oidc.isAuthenticated$;
  userData$ = this.oidc.userData$;
}
