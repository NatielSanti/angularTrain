import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './main/app.component';
import { ChildComponent }   from './child/child.component';
import { DataService } from './service/data.service';
import { LogService } from './service/log.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ChildComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ DataService, LogService ]
})
export class AppModule { }