import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private readonly MOCK_USER = {
    email: 'usuario@ejemplo.com',
    password: '123456',
    name: 'Usuario Demo'
  };

  private readonly TOKEN_KEY = 'auth_token';

  login(email: string, password: string): Observable<string> {
    if (
      email === this.MOCK_USER.email &&
      password === this.MOCK_USER.password
    ) {
      const mockToken = this.generateMockJWT();
      localStorage.setItem(this.TOKEN_KEY, mockToken);
      return of(mockToken);
    }

    return throwError(() => new Error('Credenciales inválidas'));
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private generateMockJWT(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: this.MOCK_USER.email,
      name: this.MOCK_USER.name,
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hora
    }));
    const signature = 'mock-signature';

    return `${header}.${payload}.${signature}`;
  }

}
