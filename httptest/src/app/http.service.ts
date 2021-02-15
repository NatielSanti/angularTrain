import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getUsers() : Observable<User[]> {
        return this.http.get('assets/users.json').pipe(map(data=>{
            let usersList = data["userList"];
            return usersList.map(function(user:any) {
                return {id: user.id, firstName: user.firstName, lastName: user.lastName};
              });
        }));
    }

    getUserAll(){
        return this.http.get('http://localhost:8080/api/data/all')
    }

    postUser(user: User){
        const body = {firstName: user.firstName, lastName: user.lastName};
        return this.http.post('http://localhost:8080/api/data/add', body);
    }
}