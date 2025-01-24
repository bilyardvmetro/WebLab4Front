import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {IAuthenticationResponse} from '../interfaces/authentication-response';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = 'http://localhost:44044/WebLab4Back-1.0-SNAPSHOT/api/auth'

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<IAuthenticationResponse> {
        const user = {username, password}
        return this.http.post<IAuthenticationResponse>(`${this.API_URL}/login`, user)
    }

    register(username: string, password: string): Observable<IAuthenticationResponse> {
        const user = {username, password}
        return this.http.post<IAuthenticationResponse>(`${this.API_URL}/register`, user)
    }
}
