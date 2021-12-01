import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSourcesTableComponent } from './sources-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { FormsModule } from '@angular/forms';
import { CvcSourceTagModule } from '../source-tag/source-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CvcSourcesTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzSelectModule,
    CvcClearableInputFilterModule,
    CvcSourceTagModule,
  ],
  exports: [CvcSourcesTableComponent]
})
export class CvcSourcesTableModule { }