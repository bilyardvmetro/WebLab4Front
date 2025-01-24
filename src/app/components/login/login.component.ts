import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, NgClass],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    error_msg: string = ''
    authService = inject(AuthService)
    router = inject(Router)
    formBuilder = inject(FormBuilder)

    loginForm: FormGroup = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(36)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(36)]]
    })

    // success: returns auth_token & message. error returns message to display
    OnLogin() {
        if (this.loginForm.valid) {
            this.authService.login(
                this.username.value,
                this.password.value
            ).subscribe({
                next: (response) => {
                    localStorage.setItem("auth_token", response.token) // saving auth_token
                    localStorage.setItem("username", this.username.value)
                    this.router.navigate(['/home'])
                },
                error: (error:HttpErrorResponse) => this.error_msg = error.error.message
            })
        }
    }

    get username() {
        return this.loginForm.controls['username']
    }

    get password() {
        return this.loginForm.controls['password']
    }
}
