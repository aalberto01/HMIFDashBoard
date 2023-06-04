import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type inputTypes = 'text' | 'email' | 'tel' | 'password';

@Component({
  selector: 'app-hmif-input',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './hmif-input.component.html',
  styleUrls: ['./hmif-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => HmifInputComponent
      ),
      multi: true
    }
  ]
})
export class HmifInputComponent implements ControlValueAccessor {

  @Input({required: true})
  type: inputTypes = 'text';

  @Input({required: true})
  labelText: string = '';

  @Input()
  icon: string = 'mode_edit';

  @Input()
  placeholder: string = ''

  value: FormControl = new FormControl();

  onChange = ( value: string ) => {};
  onTouch = () => {};

  writeValue(value: string): void {
    this.value.setValue(value);
  }
  registerOnChange(fn:  (value: string) => void ): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void ): void {
    this.onTouch = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
