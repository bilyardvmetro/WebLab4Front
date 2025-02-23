import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const auth_token = localStorage.getItem("auth_token")

    if (auth_token != null) return true;
    else {
        router.navigateByUrl('/login')
        return false
    }
};
