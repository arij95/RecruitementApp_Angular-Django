import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  login(useremail, password): Observable<boolean>{
    if(useremail=== 'infinity' && password=== 'infinity'){
      return of(true);
    } else {
      return of(false);
    }

}
}
