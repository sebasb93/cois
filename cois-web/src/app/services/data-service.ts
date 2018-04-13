import { Injectable } from '@angular/core';
import { SessionUser } from '../models/session-user';

@Injectable()
export class DataService {

    private idKey: string;
    private nameKey: string;

    constructor() {
        this.idKey = 'idKey';        
    }

    setSessionKey(value: string) {
        localStorage.setItem(this.idKey, value);
        
    }

    getSessionKey() {
        let session = localStorage.getItem(this.idKey);
        return session ? session : '';        
    }





}
