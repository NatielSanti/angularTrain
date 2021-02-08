import { Component } from '@angular/core';
import {DataService} from './../service/data.service';

class Item{
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./../../style.css']
})
export class AppComponent {
    currentDate: string = "04.02.2021";
    weekDay: string = "monday";
    text: string;
    price: number = 0;
    count: number=0;
    name: string = "Tom";
    isRed: boolean = true;
    sex: string = "Battle helicopter";
    age: number = 123;
    clicks:number = 0;

    items: Item[] =
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];

    phones: string[] = [];
    phone: string;

    constructor(private dataService: DataService){}

    addItem(text: string, price: number): void {

        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    }

    increase($event : any) : void {
        this.count++;
        this.isRed = !this.isRed;
        console.log($event);
    }

    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }

    addPhone(name: string){
        this.dataService.addData(name);
    }

    ngOnInit(){
        this.phones = this.dataService.getData();
    }
}