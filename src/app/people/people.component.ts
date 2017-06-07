import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { PeopleService } from 'app/core';
import { Person } from 'app/models';

@Component({
    selector: 'people',
    templateUrl: './people.html'
})
export class PeopleComponent implements OnInit, OnDestroy {
    people: Person[];

    private _subscriptions = new Array<Subscription>();

    constructor(
        private _peopleService: PeopleService,
    ) {}

    ngOnInit() {
        this._subscriptions.push(
            this._peopleService.people.subscribe(people => {
                this.people = people;
            }));
    }

    load() {
        this._peopleService.load();
    }

    ngOnDestroy() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}
