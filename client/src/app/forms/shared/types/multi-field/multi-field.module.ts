import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MultiFieldComponent, MultiFieldType } from './multi-field.type';
import { NzButtonModule } from 'ng-zorro-antd/button';

const formlyConfig = {
  types: [MultiFieldType]
}

@NgModule({
  declarations: [MultiFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [MultiFieldComponent]
})
export class MultiFieldModule { }