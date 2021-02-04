import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./../../style.css']
})
export class ChildComponent {
    name: string = "Евгений";
}