import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcRevisionTagComponent } from './revision-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcRevisionTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    CvcPipesModule,
    NzTagModule,
    NzIconModule,
  ],
  exports: [CvcRevisionTagComponent]
})
export class CvcRevisionTagModule { }