import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { SideComponent } from '../core/dashboard/side/side.component';
// import { AuthGuardService } from '../services/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: SideComponent,
        // canActivate: [AuthGuardService],
        children: [

            { path: "dashboard", component: DashboadComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },


        ]

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlatformRoutingModule { }
