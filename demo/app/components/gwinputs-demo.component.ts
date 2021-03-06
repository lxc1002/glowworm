import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'gwinputs-demo',
    template: `
        <h1>gw-inputs</h1>

        <p>
            <gw-toolbar>
                <gw-inputs #gwcontrol
                           [label]="'设备信息'"
                           [btnSize]="'btn-xs'"
                           [enabled]="true"
                           [disabled]="disabled"
                           [closeable]="true"
                           [placeholder]="'设备信息'"

                           [(ngModel)]="value"
                           (onSave)="log('onSave', $event)"
                           (onCancel)="log('onCancel', $event)"

                           name="deviceinfo">
                </gw-inputs>
            </gw-toolbar>

            <button class="btn btn-xs" (click)="disabled = !disabled">toggle disabled</button>

            {{value}}
        </p>
        <p>
            <gw-inputs #gwcontrol
                       [label]="'设备信息'"
                       [btnSize]="'btn-xs'"
                       [enabled]="true"
                       [closeable]="true"
                       [placeholder]="'设备信息'"

                       [(ngModel)]="value"

                       [clearSave]="true"
                       [onBeforeSave]="onBeforeSave"
                       (onSave)="log('onSave', $event)"
                       (onCancel)="log('onCancel', $event)"

                       name="deviceinfo">
            </gw-inputs>
            {{value}}
        </p>
        <p>
            <gw-inputs #gwcontrol
                       [label]="'设备信息'"
                       [btnSize]="'btn-xs'"
                       [enabled]="true"
                       [closeable]="true"
                       [placeholder]="'... ...'"

                       [(ngModel)]="value"
                       [clearSave]="true"
                       (onSave)="log('onSave', $event)"
                       (onCancel)="log('onCancel', $event)"

                       name="deviceinfo">
            </gw-inputs>
            {{value}}
        </p>
        <div class="row">
            <div class="col-md-4">
                <gw-inputs #gwcontrol
                           [label]="'设备信息'"
                           [gwClass]="'form-control form-control-glowworm'"
                           [btnSize]="'btn-xs'"
                           [enabled]="true"
                           [closeable]="false"
                           [placeholder]="'... ...'"

                           [(ngModel)]="value"
                           [clearSave]="true"
                           (onSave)="log('onSave', $event)"
                           (onCancel)="log('onCancel', $event)"

                           name="deviceinfo">
                </gw-inputs>
            </div>
            <div class="col-md-4"><input type="text" class="form-control"/></div>
            <div class="col-md-4"><input type="text" class="form-control"/></div>
        </div>

        <p>

            <gw-inputs #gwcontrol
                       [label]="'设备信息'"
                       [gwClass]="'form-control form-control-glowworm'"
                       [btnSize]="'btn-xs'"
                       [enabled]="true"
                       [closeable]="false"
                       [placeholder]="'... ...'"
                       [formatter]="formatter()"

                       [(ngModel)]="value"
                       [clearSave]="true"
                       (onSave)="log('onSave', $event)"
                       (onCancel)="log('onCancel', $event)"

                       name="deviceinfo">
            </gw-inputs>
        </p>
    `
})
export class GwInputsDemoComponent implements OnInit {

    value: string[] = ['hello', 'world'];

    disabled = false;

    ngOnInit() {
    }

    onBeforeSave(): Observable<boolean> {
        console.log(arguments);
        const confirm = window.confirm('Save ?');
        return Observable.of(confirm);
    }

    log(args1, args2) {
        console.warn(arguments);
    }

    formatter() {
        let formatter = () => {
            return `${this.value.join(' -- ')}`;
        };
        return formatter.bind(this);
    }
}