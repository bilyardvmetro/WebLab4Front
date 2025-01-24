import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'


@Injectable({
    providedIn: 'root'
})
export class PointService {
    private API_URL = 'http://localhost:44044/WebLab4Back-1.0-SNAPSHOT/api/point'

    constructor(private http: HttpClient) {

    }

    addPoint(x: number, y: number, r: number, auth_token: string): Observable<any> {
        const point = {x, y, r}
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`,
            })
        };

        return this.http.post(`${this.API_URL}/add`, point, httpOptions)
    }

    getAllUserPoints(auth_token: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': '*/*',
                'Authorization': `Bearer ${auth_token}`,
            })
        };

        return this.http.get(`${this.API_URL}/getUserPoints`, httpOptions)
    }
}
