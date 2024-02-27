import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-headerSignIn',
    templateUrl: './headerSignIn.component.html',
    styleUrls: ['./headerSignIn.component.scss'],
    providers: [DatePipe],
})
export class headerSignInComponent implements OnInit {

    userName: any;
    userImg: any;
    data: any[] = [];
    hidden: boolean = false;
    userIdentity: any;
    notifications_list: any[]
    // userSubscription$ = new Subscription;
    today = new Date(); // Current date and time
    pipe = new DatePipe('en-US');
    alert_count: any;
    pushNotificationArray: any[]

    constructor(public route: ActivatedRoute,
        private router: Router,
    ) {
        this.userName = '';
        this.notifications_list = []
        this.pushNotificationArray = []
        this.alert_count = ""
    }
    ngOnInit(): void {
        // this.getUserProfile();
        this.getUserInfo();

    }


    toggleBadgeVisibility() {
        this.hidden = true;
    }

    /*** logout the cureent logged In user */
    logout() {


        //     this.router.navigateByUrl('/login');
    }

    getUserInfo() {
        // const us: any = localStorage.getItem('userData');
        // const user = JSON.parse(us);
        // this.userName = user.first_name
        // this.userImg = user.image
        // this.userIdentity = user
    }


    setting() {
        // this.router.navigateByUrl('pickup/settings');
    }
    userProfile() {
        // this.router.navigateByUrl('pickup/user-management/user-profile')
    }
    // firebase signout 


    onMenuClosed() {
    }



}
