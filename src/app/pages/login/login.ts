import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Update the path below to the actual location of your user.service file
import { UserService } from '../../services/user';// 🔧 CORREGIDO
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]] // Validación mínima
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.userService.getUsers().subscribe(users => {
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          this.router.navigate(['/pokemon']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos.';
        }
      }, error => {
        this.errorMessage = 'Error al conectar con el servidor.';
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  getPasswordStrength(): string {
    const password = this.loginForm.get('password')?.value || '';
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z\d]/.test(password)) strength++;

    if (strength <= 2) return 'Débil';
    if (strength === 3 || strength === 4) return 'Media';
    return 'Fuerte';
  }

  getStrengthColor(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'Débil': return 'red';
      case 'Media': return 'orange';
      case 'Fuerte': return 'green';
      default: return '';
    }
  }
}
