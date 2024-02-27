import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';

const routes: Routes = [
  {
    path: '', component: DefaultScreenComponent,
    children: [
      { path: '', redirectTo:'/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
     
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }