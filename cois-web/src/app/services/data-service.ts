import { Injectable } from '@angular/core';
import { SessionUser } from '../models/session-user';

@Injectable()
export class DataService {

    private idKey: string;
    private nameKey: string;

    constructor() {
        this.idKey = 'idKey';
        this.nameKey = 'nameKey';
    }

    setSessionKey(value: SessionUser) {
        localStorage.setItem(this.idKey, value.userId);
        localStorage.setItem(this.nameKey, value.name);
    }

    getSessionKey() {
        const res: SessionUser = {
            userId: localStorage.getItem(this.idKey) ? localStorage.getItem(this.idKey) : '',
            name: localStorage.getItem(this.nameKey) ? localStorage.getItem(this.nameKey) : '',
        };

        return res;
    }





}
