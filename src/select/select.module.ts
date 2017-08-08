import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PopoverModule} from "ngx-bootstrap";
import {GWSelectComponent} from "./select.component";
import {GWUtilModule} from "../utils/util.module";

@NgModule({
    declarations: [
        GWSelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PopoverModule.forRoot(),
        GWUtilModule
    ],
    exports: [
        GWSelectComponent
    ]
})
export class GWSelectModule {
}