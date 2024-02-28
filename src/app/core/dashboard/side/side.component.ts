import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Menu } from 'src/app/interfaces/model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  isMobile: boolean = false;
  isMobileView: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav | any;
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  menus: any[];
  menu: any[];
  finalMenu: Menu[];
  features: any[];
  userName: any;
  userImg: any;
  data: any[] = [];
  hidden: boolean = false;
  userIdentity: any;
  notifications_list: any[] = [];
  pushNotificationArray: any[] = [];
  alert_count: any;


  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  constructor(private breakpointObserver: BreakpointObserver, private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    this.features = [];

    this.finalMenu = [];
    this.menus = [];
    this.menu = [
      {
        id: 8001,
        name: "Dashboard",
        icon: "grid_view",
        route: "dashboard",
        is_parent: false,
        permissions: ["RW"],
        sub_menu: []
      },


    ];

    const fea: any = localStorage.getItem('features');
    let featureList = JSON.parse(fea);
    featureList.forEach((ele: any) => {
      this.features.push(ele.featureId);
    });

  }


  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobileView = result.matches;
    });

    this.setMenu();
    this.getUserInfo();
  }

  toggleBadgeVisibility() {
    this.hidden = true;
}

  getUserInfo() {
    const us: any = localStorage.getItem('userData');
    const user = JSON.parse(us);
    this.userName = "Anonymous"
    this.userImg = "../../../../assets/images/x.svg"

  }

  setMenu() {
    this.menu.forEach((menu, idx) => {
      if (menu.is_parent && menu.sub_menu.length > 0) {
        const m = this.menu[idx];
        this.finalMenu = [];
        this.menus.push(m);
        menu.sub_menu.forEach((sm: any) => {
          if (this.features.includes(sm.id)) {
            this.finalMenu.push(sm);
          }
        });
        m.sub_menu = this.finalMenu;
        if (this.finalMenu.length === 0) {
          let ix = this.menus.findIndex((ele: any) => {
            return ele.name === m.name;
          });
          this.menus.splice(ix, 1);
        }
      } else {
        if (this.features.includes(menu.id)) {
          this.menus.push(menu);
        }
      }

    });
  }

  onSelectedItem(menu: any, idx: number) {

    menu[idx].expanded = !menu[idx].expanded;
    for (let i = 0; i < menu.length; i++) {
      if (menu[idx].expanded) {
        menu[i].expanded = false;
        menu[idx].expanded = true;
      } else {
        menu[idx].expanded = false;
      }
    }

  }

  logout() {
    localStorage.removeItem("features")
    this.router.navigateByUrl('/login');

  }

  onToggleSidenav() {
    this.isMobile = !this.isMobile;
  }

  toggleSidebar() {
    this.sidenav.toggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

}
