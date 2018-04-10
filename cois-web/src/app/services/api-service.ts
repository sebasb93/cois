import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

    url: string;

    constructor(public http: HttpClient) {
        this.url = 'http://localhost:55887/api/test/';
    }

    getTest() {
        return 'Hello from ApiService';
    }

    GetAllItems(): Observable<any> {
        return this.http.get(this.url + '');
    }


}
