import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { CustomValidators } from 'src/app/core/custom.validator';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';


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
    private apiService: ApiService,

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
    if (!this.loginForm.valid) {
      return
    }
    else {
      console.log("this.loginForm", this.loginForm)
      let payload =
      {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }

      let slug = new URL(`${environment.baseUrl}signin`)
      this.apiService.post(slug.href, payload).subscribe(
        (response: any) => {
          console.log("response", response)
          localStorage.setItem('token', response.token);
          this.apiService.successToster("Sucess", "Login Successfully");
          let featuresResp: any = [
            { id: 14, featureId: 8001, name: "Dashboard", }]
          localStorage.setItem('features', JSON.stringify(featuresResp));
          localStorage.setItem('permission', JSON.stringify(true));

          this.router.navigateByUrl('subscriber/dashboard')

        }, (err: any) => {
          console.log("response", err['error']['error'])
          this.apiService.errorToster("Error", err['error']['error']);

        }

      )
    }

  }
}