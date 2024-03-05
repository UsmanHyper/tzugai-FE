import { Component, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/shared/general-table/model';
import { SubTableConfig, USER_STATUS } from './config';
import { FORMATS } from 'src/app/shared/general-table/formats';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { iif } from 'rxjs';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit {
  config: TableConfig;
  users: any[];
  totalUserLength: any;
  count: number;
  npPage: any;
  searchValue: any
  currentPage: any
  filtersUser = {
    limit: 10, offset: 0, orderby: '', sortby: '', search: '', page: '1',
  };

  dbs: any[] = []

  constructor(private apiservices: ApiService) {

    this.config = new TableConfig(SubTableConfig.config);
    this.users = [];
    this.count = 0;

  }

  ngOnInit(): void {
    this.defineFormats();
    this.getUsers(this.filtersUser);
  }

  onTableSignals(ev: any) {
    console.log("onTableSignals event", ev);
    if (ev.type === "onPagination") {
      this.filtersUser.page = ev.data.page;
      this.filtersUser.limit = ev.data.limit;
      this.filtersUser.offset = ev.data.offset


    }
    else if (ev.type === "onSorting") {
      this.filtersUser.sortby = ev.data.column;
      this.filtersUser.orderby = ev.data.direction;
    }

    this.getUsers(this.filtersUser)
  }

  searchFeild() {
    this.filtersUser.search = this.searchValue
    this.getUsers(this.filtersUser);


  }

  clearSearch() {
    this.searchValue = '';
    this.filtersUser.search = this.searchValue
    console.log("===============", this.filtersUser)
    this.getUsers(this.filtersUser);
  }


  // getUsers(filters: any) {
  //   let url = new URL(`${environment.baseUrlData}get_all?`)

  //   for (const key in filters) {
  //     if (!!filters[key]) {
  //       url.searchParams.set(key, filters[key]);
  //     }
  //   }

  //   this.apiservices.get(url.href).subscribe(
  //     (resp: any) => {
  //       console.log("resp", resp);
  //       let dt = resp.data

  //       this.users = dt.users
  //       console.log("============", this.users)
  //       // this.totalUserLength = resp.data.users.total;
  //       this.count = resp.totalData;
  //       this.npPage = { nextPage: resp.nextPage, prevPage: resp.previousPage };



  //     }, (err: any) => {


  //     })

  // }

  getUsers(filters: any) {
    let url = new URL(`${environment.baseUrlData}get_all?`)

    for (const key in filters) {
      if (!!filters[key]) {
        url.searchParams.set(key, filters[key]);
      }
    }

    this.apiservices.get(url.href).subscribe(
      (resp: any) => {
        console.log("resp", resp);
        let data = resp.data.users;
        this.currentPage = resp.currentPage;
        let dt: any[] = data;
        this.users = dt;
        this.count = resp.totalData;
        this.npPage = { nextPage: resp.nextPage, prevPage: resp.prevPage };
      },
      (err: any) => {
        // Handle error
      }
    );
  }

  defineFormats() {
    FORMATS['status'] = USER_STATUS;
  }
}
