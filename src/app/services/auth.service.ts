import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { StorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(private http: HttpClient, private router: Router, private localStorageService: StorageService,) {


  }

  unsetUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('userMS-token');
    localStorage.removeItem('assosiations');
    this.router.navigate(['/'])
  }




  setUser(user: any): void {
    if (!!user) {
      this.localStorageService.store('userData', user);
    }
  }


  isAuthenticated(): any {


    return true;
  }

}
