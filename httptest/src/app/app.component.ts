import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {

    user: User;

    constructor(private http: HttpClient){}

    ngOnInit(){
        console.log("asdadsada");
        this.http.get('assets/user.json').subscribe(
            (data:User) => {
                console.log("qweqweqwe");
                this.user=data
        });
    }
}