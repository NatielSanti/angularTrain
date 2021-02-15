import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    users: User[]=[];
    error:any;

    constructor(private httpService: HttpService){}

    ngOnInit(){
            this.httpService.getUsers().subscribe(
            data=>this.users=data,
            error => {  this.error = error.message;
                        console.log(error);}
        );
    }
}