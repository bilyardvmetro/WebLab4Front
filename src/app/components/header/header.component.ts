import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {setUsername} from '../../../scripts/setUsername';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    username: string = setUsername()
    router = inject(Router)

    logout() {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('username')
        this.router.navigate(['/'])
    }
}
