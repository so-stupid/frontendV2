import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {

  @Input() name: string;
  @Input() placeholder = 'Введите значение';
  @Input() required = false;
  @Input() type = 'text';
  @Input() class = 'form-control';


  private arg: any;

  constructor() {
  }

  onChange: any = () => {
  }
  onTouched: any = () => {
  }

  // tslint:disable-next-line:typedef
  get value() {
    return this.arg;
  }

  set value(val) {
    this.arg = val;
    this.onChange(val);
    this.onTouched();
  }

  ngOnInit(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.arg = obj;
    }
  }

}
