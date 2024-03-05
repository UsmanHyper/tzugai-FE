import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// import { DirectivesModule } from "src/app/shared/directives/module";
import { PaginatorModule } from "src/app/shared/pagination/module";
// import { SearchModule } from "src/app/shared/search/search-module";

import { GeneralTableComponent } from "./general-table.component";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { DirectivesModule } from "../directives/module";



@NgModule({
    declarations: [
        GeneralTableComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginatorModule,
        MatInputModule,
        MatIconModule,
        DirectivesModule
    ],
    exports: [
        GeneralTableComponent
    ]
})
export class GeneralTableModule { }