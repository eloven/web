import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Headers, Http, Response} from '@angular/http';
import {catchError, map, retry} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataSaveService {

    constructor(private auth: AuthService, private http: Http) {
    }

    /**
     * 错误捕获
     * @param error error
     */
    static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

    /**
     * post 数据
     * @param servers json
     */
    storeService(servers: any[]) {
        const token = this.auth.getToken();
        return this.http.put(
            'https://fileapp-758ce.firebaseio.com/data',
            servers);
    }

    getData() {
        return this.http.get('https://fileapp-758ce.firebaseio.com/user/pGLN2i9lrTpifEERcWXR');
    }

    /**
     * 带token
     */
    getRecipes() {
        const token = this.auth.getToken();
        this.http.get('https://www.baidu.com/data.json?auth=' + token).pipe(
            map((response) => {
                console.log(response);
            }),
            retry(2),
            catchError(DataSaveService.handleError),
        );
    }
}
