import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {

        return this.http.get(`${environment.apiUrl}/empList`).pipe(map( (user: any) => {
            let selectedUser = user.find((userObj: any) => userObj.email === username);
            let result;
            console.log('sgbsyfbs', selectedUser, user, username, );
            if (!selectedUser) {
                result = 'Invalid Credentials... Please check the credentials and try again.';
            } else if (selectedUser && selectedUser.password !== password) {
                result = 'Wrong password, try again';
            } else if (selectedUser && selectedUser.password === password) {
                if (selectedUser.isAdmin) {
                    result = 'success';
                    localStorage.setItem('user',JSON.stringify(selectedUser));
                } else {
                    result = ' You dont have the access rights. Contact super admin for further support';
                }
            }
              return result;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}