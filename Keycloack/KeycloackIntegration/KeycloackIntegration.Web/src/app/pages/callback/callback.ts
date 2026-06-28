import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  imports: [],
  templateUrl: './callback.html',
  styleUrl: './callback.css',
})
export class Callback {
  private oidc = inject(OidcSecurityService);
  private router = inject(Router)
  constructor() {
    this.oidc.checkAuth().subscribe({
      next: ({ isAuthenticated }) => {
        if (isAuthenticated) {
          this.router.navigate(['/weather']);
        } else {
          this.router.navigate(['/unauthorized']);
        }
      },
      error: (err) => {
        console.error(err);
        this.router.navigate(['/unauthorized']);
      },
    });
  }
}
