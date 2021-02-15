import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import { NgModel} from '@angular/forms';
import {User} from './user';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    user: User = new User();
    users: User[]=[];
    users_from_server: User[]=[];
    error:any;

    constructor(private httpService: HttpService){}

    ngOnInit(){
            this.httpService.getUsers().subscribe(
            data=>this.users=data,
            error => {  this.error = error.message;
                        console.log(error);}
        );
    }

    postUsers(){
        this.httpService.postUser(this.user).subscribe((data: User[]) =>
          { this.users_from_server = data },
          error => console.log(error))}

    getUsers(){
        this.httpService.getUserAll().subscribe((data:any) => {
            this.users_from_server = data
        });
    }
}