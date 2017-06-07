import { NgModule } from '@angular/core';
import { PeopleService } from './people.service';

@NgModule({
    providers: [
        PeopleService,
    ],
})
export class CoreModule { }
