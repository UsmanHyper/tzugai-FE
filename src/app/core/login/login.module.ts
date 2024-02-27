import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgProgressModule } from 'ngx-progressbar';
import { ToastrModule } from 'ngx-toastr';
import { headerSignInComponent } from 'src/app/core/login/headerSignIn/headerSignIn.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
    declarations: [
        LoginComponent,
        DefaultScreenComponent,
        headerSignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        NgProgressModule.withConfig({
            spinner: false,
            color: "#426bf7",
            thick: true,
        }),
        // NgProgressHttpModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            preventDuplicates: true,
        }),

    ]
})
export class LoginModule { }