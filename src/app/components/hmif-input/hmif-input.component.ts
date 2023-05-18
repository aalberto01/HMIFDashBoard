import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

type inputTypes = 'text' | 'email' | 'tel' | 'password';

@Component({
  selector: 'app-hmif-input',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './hmif-input.component.html',
  styleUrls: ['./hmif-input.component.scss']
})
export class HmifInputComponent {
  @Input({required: true})
  type: inputTypes = 'text';

  @Input({required: true})
  labelText: string = '';

  @Input()
  icon: string = 'mode_edit';

  @Input()
  placeholder: string = ''

  @Input({required:true})
  formControl!: AbstractControl;
}
