import { Component } from '@angular/core';

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

    items: Item[] =
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];
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
}