import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { first } from "rxjs/internal/operators/first";
import { UserProfile } from "../model/user-profile";

//const USER_PROFILE_PATH: string = 'http://localhost:8080/api/user/profile';
const USER_PROFILE_PATH: string = '/api/user/profile';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUserProfile(): Observable<UserProfile> {
        return this.http.get<UserProfile>(USER_PROFILE_PATH).pipe(
            first()
        );
    }
}