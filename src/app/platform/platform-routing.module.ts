import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from '../core/dashboard/main-dashboard/main-dashboard.component';
import { DashboadComponent } from './dashboad/dashboad.component';
// import { AuthGuardService } from '../services/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: MainDashboardComponent,
        // canActivate: [AuthGuardService],
        children: [
            // { path: "", component: DashboadComponent },
            { path: "dashboard", component: DashboadComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // { path: 'dashboard', loadChildren: () => import('../platform/dashboard/dashboard.module').then(module => module.DashboardModule) },
            // { path: 'dashboard', loadChildren: () => import('../platform/dashboard/dashboard.module').then(module => module.DashboardModule) },
            // { path: 'audit', loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule) },
            // { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
            // { path: 'user-management', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
            // { path: 'drivers-and-trucks', loadChildren: () => import('./drivers-and-trucks/drivers-and-trucks.module').then(m => m.DriversAndTrucksModule) },
            // { path: 'accident-reporting', loadChildren: () => import('./accident-reporting-and-tracking/accident-reporting-and-tracking.module').then(m => m.AccidentReportingAndTrackingModule) },
            // { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },

        ]

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlatformRoutingModule { }
