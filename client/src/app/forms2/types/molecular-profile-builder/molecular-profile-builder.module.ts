import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcMolecularProfileBuilderType } from './molecular-profile-builder.type'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { NzGridModule } from 'ng-zorro-antd/grid'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'molecular-profile-builder',
      wrappers: ['form-field'],
      component: CvcMolecularProfileBuilderType,
    },
  ],
}

@NgModule({
  declarations: [CvcMolecularProfileBuilderType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    FormlyModule.forChild(typeConfig),
    NzGridModule,
    CvcFormFieldWrapperModule,
  ],
  exports: [CvcMolecularProfileBuilderType],
})
export class CvcMolecularProfileBuilderModule {}