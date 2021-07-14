import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variants-comments',
  templateUrl: './variants-comments.component.html',
  styleUrls: ['./variants-comments.component.less'],
})
export class VariantsCommentsComponent {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId'];
    this.commentable = {
      id: variantId,
      entityType: CommentableEntities.Variant
    }
  }
}