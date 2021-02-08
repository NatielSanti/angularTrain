import { Component} from '@angular/core';
import { NgModel} from '@angular/forms';

export class Phone{
    constructor(public title: string,
                public price: number,
                public company: string)
    { }
}

export class User{
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./../style.css']
})
export class AppComponent {

    user: User = new User();
    phone: Phone = new Phone("", 0, "");
    phones: Phone[] = [{ title: "X10", price: 120000, company: "Apple" }];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    addPhone(title:NgModel, price: NgModel, comp: NgModel){
        console.log(title.model + " " + price.model + " " + comp.model);
        this.phones.push(new Phone( title.model, price.model, comp.model ) );
        console.log(this.phones.length);
    }

    onTitleChange(){

        if(this.phone.title=="нет")
            this.phone.title = "неизвестно";
    }

    addUser(){
        console.log(this.user);
    }
}