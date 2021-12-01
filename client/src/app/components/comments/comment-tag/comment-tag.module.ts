import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentTagComponent } from './comment-tag.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcCommentPopoverModule } from '../comment-popover/comment-popover.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcCommentTagComponent],
  imports: [
    CommonModule,
    NzPopoverModule,
    NzIconModule,
    CvcCommentPopoverModule,
    NzTagModule
  ],
  exports: [CvcCommentTagComponent]
})
export class CvcCommentTagModule { }