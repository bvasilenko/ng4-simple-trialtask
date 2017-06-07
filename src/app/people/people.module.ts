import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from 'app/core/core.module';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person.component';

const COMPONENTS = [
    PeopleComponent,
    PersonComponent,
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class PeopleModule { }
