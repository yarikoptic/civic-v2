import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantSelectType } from './variant-select.type';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcFieldTagWrapperModule } from '../../wrappers/field-tag/field-tag.module';
import { CvcFormCardModule } from '../../wrappers/form-card/form-card.module';
import { ReactiveComponentModule } from '@ngrx/component';

const configOption: ConfigOption = {
  types: [
    { // variant-select only
      name: 'variant-select',
      component: VariantSelectType,
    },
    { // field-tag wrapper replaces select with variant-tag upon selection
      name: 'variant-select-tag',
      extends: 'variant-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'variant-select-field',
      extends: 'variant-select-tag',
      wrappers: ['form-field', 'field-tag' ]
    },
    { // select-tag card with cvc-form-card label, validation, helptext
      name: 'variant-select-card',
      extends: 'variant-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}

@NgModule({
  declarations: [VariantSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzTypographyModule,
    CvcFieldTagWrapperModule,
    CvcFormCardModule,
  ]
})
export class CvcVariantSelectTypeModule { }