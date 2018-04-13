import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { AddItemRequest } from '../models/add-item-request';
import { ItemResponse } from '../models/edit-item-response';
import { UserResponse } from '../models/user-response';
import { AddUserRequest } from '../models/add-user-request';
import { ApiResponse } from '../models/api-response';
import { LoginRequest } from '../models/login-request';

@Injectable()
export class ApiService {

    url: string;

    constructor(public http: HttpClient) {
        this.url = 'http://localhost:49645/api/';
    }

    getTest() {
        return 'Hello from ApiService';
    }

    GetAllItems(): Observable<ItemResponse> {
        return this.http.get<ItemResponse>(this.url + 'items');
    }

    addItem(value: AddItemRequest): Observable<any> {
        return this.http.post(this.url + 'items', value);
    }

    GetAllUsers(): Observable<UserResponse> {
        return this.http.get<UserResponse>(this.url + 'users');
    }

    addUser(value: AddUserRequest): Observable<any> {
        return this.http.post(this.url + 'users', value);
    }

    addFingerp(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('http://localhost:61491/api/Biometric','');
    }

    GetAllTransactions(): Observable<ItemResponse> {
        return this.http.get<ItemResponse>(this.url + 'transactions');
    }

    Login(value: LoginRequest): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.url + 'Login', value);
    }

    VerifyFinger(value: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://localhost:61491/api/Biometric/?idUsuario='+value);
    }

}
