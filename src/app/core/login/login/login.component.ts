import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { CustomValidators } from 'src/app/core/custom.validator';
// import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  hidePassword: boolean;

  menus: any[];
  userData: any;
  permission: any;
  brandingData: any;
  loginForm: FormGroup;

  constructor(
    private titlePage: Title,
    private router: Router,
    private fb: FormBuilder,
    // private apiService: ApiService,

  ) {
    this.loading = false;
    this.hidePassword = true;
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, CustomValidators.isEmail, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
      password: [null, [Validators.required,]],
      remember: [false],
    });

    this.menus = [];
    this.titlePage.setTitle('Sign-In');
  }

  ngOnInit(): void {

    const uName = localStorage.getItem('useremail');
    const uPassword = localStorage.getItem('userpassword');
    if (!!uName && !!uPassword) {
      this.loginForm.patchValue({
        email: uName,
        password: uPassword,
        remember: true,
      });
    }

  }


  submitSignIn() {
    console.log("this.loginForm", this.loginForm)
    this.router.navigateByUrl('subscriber/dashboard')
    let featuresResp: any = [
      { id: 14, featureId: 8001, name: "Dashboard", }]
    localStorage.setItem('features', JSON.stringify(featuresResp));
  }


  // submitSignIn() {
  //   if (!this.loginForm.valid) {
  //     return;
  //   }
  //   this.loading = true;
  //   const formData = this.loginForm.value;
  //   const url = new URL(`${environment.baseUrl}/users/authentication/login`);
  //   const payload = {
  //     email: formData.email.toLowerCase(),
  //     password: formData.password,
  //     platform: 'WEB',
  //     usecase: 8
  //   };

  //   this.apiService.post(url.href, payload).subscribe((resp: any) => {
  //     localStorage.setItem('token', resp.data['Token']);
  //     this.signInFB(resp.data['fb_auth_token']);

  //     if (formData.remember) {
  //       localStorage.setItem('remember', formData.remember);
  //       localStorage.setItem('useremail', formData.email);
  //       localStorage.setItem('userpassword', formData.password);
  //     }

  //     // Use forkJoin to handle multiple API calls concurrently
  //     forkJoin([
  //       this.apiService.get(`${environment.baseUrl}/users/user-profile`),
  //       this.apiService.get(`${environment.pickUpBaseUrlfeature}/users/features`)
  //     ]).subscribe(([profileResp, featuresResp]) => {
  //       const user = profileResp.data;
  //       this.userData = user;
  //       user['use_cases'] = 8;
  //       const write = user['write'];
  //       this.permission = write === 'WRITE' || write === true;

  //       localStorage.setItem('permission', JSON.stringify(this.permission));
  //       localStorage.setItem('userData', JSON.stringify(user));
  //       localStorage.setItem('features', JSON.stringify(featuresResp));

  //       this.getProfileSettings();

  //       this.apiService.successToster('Login Successful', 'Success');
  //       this.router.navigateByUrl('pickup/dashboard');
  //     }, (err: any) => {
  //       this.loading = false;
  //       this.apiService.errorToster("Error", 'Access Group Not Assigned');
  //     });
  //   }, (err: any) => {
  //     this.loading = false;
  //     this.apiService.errorToster(err.error['message'], 'Unable to login');
  //   });
  // }

  // onForgotPassword() {
  //   this.router.navigateByUrl('forgot-password');
  // }
}