import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerSignInComponent } from './core/login/headerSignIn/headerSignIn.component';

const routes: Routes = [
  // {
  //   path: '', component: TestComponent
  // },
  {
    path: '',
    loadChildren: () => import('./core/login/login.module').then(m => (m.LoginModule))
  },
  // {
  //   path: 'verify-token',
  //   component: VerifyTokenComponent
  // },
  {
    path: 'subscriber',
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
  {
    path: '**',
    redirectTo: '', pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
