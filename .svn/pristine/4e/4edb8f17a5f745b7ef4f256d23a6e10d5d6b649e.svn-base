import { Component, forwardRef, NgZone, Input, OnInit, Pipe, PipeTransform, ElementRef, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TINYMCE_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormSelectorComponent),
    multi: true
};

@Pipe({ name: 'ValuePipe' })
export class ValuePipe implements PipeTransform {
    transform(value, args: string[]): any {

        const vals = [];
        for (const v of value) {
            if (v instanceof Object) {
                const key = Object.keys(v);
                vals.push([key[0]]);
            }else {
                vals.push(v);
            }
        }
        return vals;
    }
}

@Component({
    selector: 'app-comm-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.less'],
    animations: [
        trigger('visibility', [
            transition(':enter', [style({ height: 0, overflow: 'hidden' }), animate('.2s ease', style({ height: '*' }))]),
            transition(':leave', [style({ height: '*', overflow: 'hidden' }), animate('.2s ease', style({ height: 0 }))])
        ]),
    ],
    providers: [TINYMCE_VALUE_ACCESSOR]
})

export class FormSelectorComponent implements OnInit, ControlValueAccessor {

    @Input() optionList = [];
    @Input() placeHolder;
    @Output() OptionSelect = new EventEmitter<any>();
    private visibility;
    private selector = false;
    private selected;
    private isMatched = new Array<boolean>();

    onChange = (_: any) => { console.log(_); };

    constructor(
        private elementRef: ElementRef,
        private zone: NgZone) {
    }

    writeValue(value: any): void {
        this.selected = value;
        console.log(value);
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }

    registerOnTouched(fn: () => void): void { }

    ngOnInit(): void {

        // 显示传入的placeholder
        this.elementRef.nativeElement.querySelector('.c-input').setAttribute('placeholder', this.placeHolder);
        // 若不是数组类型抛出异常
        if (!Array.isArray(this.optionList)) {
            throw(new Error('传入的数据不是数组类型'));
        }

        // 若表单有默认值则输出默认值
        if (this.selected !== void(0)) {
            this.OptionSelect.emit(this.selected);
        }
    }

    // 下拉列表展开
    selectorClick() {
        this.selector = !this.selector;
    }

    // 下拉列表项点击事件
    formListClick(index: any) {

        this.isMatched = [];

        const item = this.optionList[index];
        this.selected = item instanceof Object ? item[Object.keys(item)[0]] : item;

        for (const selItem of this.optionList) {
            if (selItem instanceof Object) {
                this.selected === selItem[Object.keys(selItem)[0]] ? this.isMatched.push(true) : this.isMatched.push(false);
            }else {
                this.selected === selItem ? this.isMatched.push(true) : this.isMatched.push(false);
            }
        }

        this.OptionSelect.emit(this.selected);
        this.zone.run(() => this.onChange(this.selected));
    }
}
