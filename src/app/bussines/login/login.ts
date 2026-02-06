import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    //constructor(private router: Router) { }
    
    loginData = {
    email: '',
    password: '',
  };
  loginError: string | null = null;
  loading = false;

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  // Mock de usuario
  /*
  private readonly MOCK_USER = {
    email: 'usuario@ejemplo.com',
    password: '123456',
  };*/

  onSubmit() {
    this.loading = true;
    this.loginError = null;

    this.authService.login(
      this.loginData.email,
      this.loginData.password
    ).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err: { message: string | null; }) => {
        this.loginError = err.message;
        this.loading = false;
      }
    });
  }

}
