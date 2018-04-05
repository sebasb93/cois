import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    
    constructor() {

    }

    getTest() {
        return "Hello from ApiService";
    }
}