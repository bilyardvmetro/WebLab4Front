import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {HeaderComponent} from "../header/header.component";
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, HeaderComponent, NgClass],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    error_msg : string = ''
    authService = inject(AuthService)
    router = inject(Router)
    formBuilder = inject(FormBuilder)

    registerForm: FormGroup = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(36)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(36)]]
    })

    // success or error: returns message to display
    OnRegister() {
        if (this.registerForm.valid) {
            this.authService.register(
                this.username.value,
                this.password.value
            ).subscribe({
                next: (response) => this.router.navigate(['/login']),
                error: (error:HttpErrorResponse) => this.error_msg = error.error.message
            })
        }
    }

    get username() {
        return this.registerForm.controls['username']
    }

    get password() {
        return this.registerForm.controls['password']
    }
}
