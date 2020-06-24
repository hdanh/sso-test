import { UserModel } from './user.model';
import { AuthModel } from './auth.model';
import { TokenProxy } from '../../shared';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
    public redirectUrl: string;
    private url = `${environment.AUTH_HOST}`;

    constructor(
        private httpClient: HttpClient
    ) { }

    public async login(model: AuthModel): Promise<any> {

        const body = new HttpParams()
            .set('username', model.username)
            .set('password', model.password)
            .set('grant_type', model.type ?? 'nurse_psa')
            .set('scope', environment.AUTH_SCOPE)
            .set('client_id', environment.AUTH_CLIENT_ID)
            .set('client_secret', environment.AUTH_CLIENT_SECRET);


        return await this.httpClient
            .post<UserModel>(`${this.url}`, body.toString(),
                {
                    headers: new HttpHeaders()
                        .set('Content-Type', 'application/x-www-form-urlencoded')
                })
            .toPromise();

    }
}
