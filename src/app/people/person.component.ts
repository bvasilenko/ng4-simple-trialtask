import { Component, Input, OnChanges } from '@angular/core';
import { Person } from 'app/models';

@Component({
    selector: 'person',
    templateUrl: './person.html',
    styleUrls: ['./person.css'],
})
export class PersonComponent implements OnChanges {

    @Input() person: Person;

    isMature: boolean;

    ngOnChanges() {
        this.isMature = this.person.age > 18;
    }

}