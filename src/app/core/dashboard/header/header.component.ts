import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';


import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [DatePipe],
})
export class HeaderComponent {
    @Output() toggleSidenav = new EventEmitter<void>();
    mobileQuery: MediaQueryList;
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
    private _mobileQueryListener: () => void;
    isSidebarOpen: boolean = false;


    constructor(public route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router,
        private AuthService: AuthService,
        changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,

    ) {
        this.userName = '';
        this.notifications_list = []
        this.pushNotificationArray = []
        this.alert_count = "";
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit(): void {
        // this.getUserProfile();
        this.getUserInfo();

    }

    toggleSidebar() {
        // this.toggleSidenav.emit();
        this.isSidebarOpen = !this.isSidebarOpen;
    }


    toggleBadgeVisibility() {
        this.hidden = true;
    }



    /*** logout the cureent logged In user */
    logout() {
        // let userEmail = JSON.parse(localStorage.getItem('userData') || '{}')
        // let params = { 'email': userEmail.email }
        // const slug = `${environment.baseUrl}/users/authentication/logout`;
        // this.apiService.post(slug, params).subscribe((data: any) => {
        //     this.AuthService.unsetUser();
        //     localStorage.removeItem("userData")
        //     localStorage.removeItem("token")
        //     localStorage.removeItem("setvalue")
        //     localStorage.removeItem("offerId")
        //     localStorage.removeItem("geolocation")
        //     localStorage.removeItem("features")
        //     localStorage.removeItem("socketUrl")
        //     localStorage.removeItem("cordinate")
        //     localStorage.removeItem("totalRides")
        //     this.socketService.socket.disconnect()
        //     if (localStorage.getItem('userData') == '') {
        //         localStorage.removeItem('userData')
        //     }
        //     let rememberMe = localStorage.getItem("remember");
        //     if (rememberMe != 'true') {
        //         localStorage.removeItem('useremail')
        //         localStorage.removeItem('userpassword')
        //     }

        this.router.navigateByUrl('/login');
        // })
    }

    getUserInfo() {
        // const us: any = localStorage.getItem('userData');
        // const user = JSON.parse(us);
        this.userName = "Anonymous"
        this.userImg = "../../../../assets/images/x.svg"
        // this.userName = user.first_name ? user.first_name : "Anonymous"
        // this.userImg = user.image ? user.image : "../../../../assets/images/x.svg"
        // this.userIdentity = user 
    }


    setting() {
        this.router.navigateByUrl('pickup/settings');
    }
    userProfile() {
        this.router.navigateByUrl('pickup/user-management/user-profile')
    }






}


