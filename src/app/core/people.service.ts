import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from 'app/models';

const NAMES = [
                {"name": "Lucina Leavitt", "age": 24, "alive": true},
                {"name": "Crystal Collings", "age": 35, "alive": true},
                {"name": "Lenard Lea", "age": 12, "alive": true},
                {"name": "Kittie Kellam", "age": 47, "alive": true},
                {"name": "Cyril Crupi", "age": 8, "alive": true},
                {"name": "Darlene Duwe", "age": 75, "alive": false},
                {"name": "Sylvia Szewczyk", "age": 57, "alive": true},
                {"name": "Patsy Planas", "age": 18, "alive": true},
                {"name": "Margo Mattes", "age": 30, "alive": true},
                {"name": "Guadalupe Giebler", "age": 22, "alive": true},
                {"name": "Not Alive Person", "age": 89, "alive": false},
            ];

class PeopleServiceState {
    people: Person[];
}

@Injectable()
export class PeopleService {
    
    private _currentState: PeopleServiceState;
    private _stateSubject: BehaviorSubject<PeopleServiceState>;

    public constructor() {
        this._currentState = this._mockState([]);
        this._stateSubject = new BehaviorSubject<PeopleServiceState>(this._currentState);
    }

    public get people() {
        return this._state.map(state => state.people);
    }

    private get _snapshot() {
        return this._currentState;
    }

    private get _state() {
        return this._stateSubject;
    }

    public load() {
        this._nextState(state => this._mockState());
    }

    private _nextState(mutator?: (state: PeopleServiceState) => void, replaceCurrentState = false) {
        if (mutator instanceof Function) {
            this._currentState = mutator(this._currentState) || this._currentState;
        }

        if (!replaceCurrentState) {
            this._stateSubject.next(this._currentState);
        }
    }

    private _mockState(people = NAMES) {
        return { people };
    }

}