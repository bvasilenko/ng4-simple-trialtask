import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PeopleModule } from './people/people.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule,

        PeopleModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
