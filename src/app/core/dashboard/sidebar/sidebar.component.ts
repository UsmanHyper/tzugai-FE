import { Component, Input, OnInit } from '@angular/core';

// import { ApiService } from 'src/app/services/api.service';
import { Menu } from 'src/app/interfaces/model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus: any[];
  menu: any[];
  finalMenu: Menu[];
  features: any[];
  @Input() isCollapsed: boolean | any;

  constructor(
    // private apiService: ApiService
  ) {
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
      // {
      //   id: 2,
      //   name: "Accident Reporting & Tracking",
      //   icon: "car_crash",
      //   route: "accident-reporting",
      //   is_parent: true,
      //   permissions: ["RW"],
      //   sub_menu: [
      //     {
      //       id: 8002,
      //       name: "Report Accident",
      //       icon: "ri-admin-line",
      //       route: "accident-reporting/report-an-accident",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     },
      //     {
      //       id: 8003,
      //       name: "Track Ride",
      //       icon: "ri-admin-line",
      //       route: "accident-reporting/track-ride",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     }
      //   ]
      // },
      // {
      //   id: 3,
      //   name: "Drivers & Tow Trucks",
      //   icon: "admin_panel_settings",
      //   route: "drivers-and-trucks",
      //   is_parent: true,
      //   permissions: ["RW"],
      //   sub_menu: [
      //     {
      //       id: 8004,
      //       name: "Manage Driver",
      //       icon: "ri-admin-line",
      //       route: "drivers-and-trucks/manage-drivers",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     },
      //     {
      //       id: 8005,
      //       name: "Driver Vehicle",
      //       icon: "ri-admin-line",
      //       route: "drivers-and-trucks/driver-documents",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     },
      //   ]
      // },
      // {
      //   id: 4,
      //   name: "User Management",
      //   icon: "manage_accounts",
      //   route: "user-management/users",
      //   is_parent: true,
      //   permissions: ["RW"],
      //   sub_menu: [
      //     {
      //       id: 8006,
      //       name: "Users ",
      //       icon: "ri-admin-line",
      //       route: "user-management/users",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     },
      //     {
      //       id: 8007,
      //       name: "Roles and Access",
      //       icon: "ri-admin-line",
      //       route: "user-management/role-and-access",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     }
      //   ]
      // },
      // {
      //   id: 5,
      //   name: "Report",
      //   icon: "description",
      //   route: "report/pick-up-history",
      //   is_parent: true,
      //   permissions: ["RW"],
      //   sub_menu: [
      //     {
      //       id: 8008,
      //       name: "Pick-up Service History",
      //       icon: "ri-admin-line",
      //       route: "report/pick-up-history",
      //       is_parent: false,
      //       permissions: ["RW"],
      //       sub_menu: []

      //     }
      //   ]
      // },
      // {
      //   id: 8009,
      //   name: "Audit",
      //   icon: "incomplete_circle",
      //   route: "audit",
      //   is_parent: false,
      //   permissions: ["RW"],
      //   sub_menu: [

      //   ]
      // },

    ];

    const fea: any = localStorage.getItem('features');
    let featureList = JSON.parse(fea);
    featureList.forEach((ele: any) => {
      this.features.push(ele.featureId);
    });

    console.log()
  }

  ngOnInit(): void {
    this.setMenu();
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

  onButtonGroupClick($event: any) {
    let clickedElement = $event.target;

    if (clickedElement.nodeName === 'A') {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
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
    /**
* Details/summary HTML element
* Only open one element at a time
*/
    if (document.querySelector('details')) {
      // Fetch all the details elements
      const details = document.querySelectorAll('details');

      // Add onclick listeners
      details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
          // Close all details that are not targetDetail
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute("open");
            }
          });
        });
      });
    }
  }



}
