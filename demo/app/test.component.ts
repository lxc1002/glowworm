import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
        <a>
            <gw-single-select #gwcontrol
                              [label]="'配置singleSelect'"
                              [data]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                              [(ngModel)]="selectModel"
                              [closeable]="true"
                              [enabled]="true"
                              [showSelect]="true"
                              [selectData]="[{id: '0', text: 'woman'}, {id: '1', text: 'man'}]"
                              [toolbar]="toolbar"
            >
            </gw-single-select>
        </a>
        <a>
            <gw-multi-select #gwcontrol
                             [label]="'配置multiSelect'"
                             [data]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                             [(ngModel)]="multiSelectModel"
                             [closeable]="true"
                             [enabled]="true"
                             [showSelect]="true"
                             [selectData]="[{id: '0', text: 'woman'}, {id: '1', text: 'man'}]"
                             [toolbar]="toolbar"
            >
            </gw-multi-select>
        </a>
    `
})
export class TestComponent {

    @Input() toolbar: any;

    selectModel: string;
    multiSelectModel: string;
}