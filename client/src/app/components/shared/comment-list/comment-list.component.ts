import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommentableInput, CommentListGQL, CommentListNodeFragment, CommentListQuery, CommentListQueryVariables, DateSort, DateSortColumns, Maybe, PageInfo, SortDirection } from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';

import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { LinkableUser } from '../user-pill/user-pill.component';


@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less'],
})
export class CommentListComponent implements OnInit {
  @Input() commentable!: CommentableInput;

  viewer$?: Observable<Viewer>;
  loading$?: Observable<boolean>;
  pageInfo$?: Observable<PageInfo>;
  comments$?: Observable<Maybe<CommentListNodeFragment>[]>;
  participants$?: Observable<LinkableUser[]>

  private queryRef$!: QueryRef<CommentListQuery, CommentListQueryVariables>;

  private pageSize = 5;

  constructor(private gql: CommentListGQL, private viewerService: ViewerService) { }

  ngOnInit() {
    this.queryRef$ = this.gql.watch({
      subject: this.commentable,
      first: this.pageSize,
      sortBy: {
        column: DateSortColumns.Created,
        direction: SortDirection.Desc
      }});

    this.viewer$ = this.viewerService.viewer$;

    let results = this.queryRef$.valueChanges;

    this.pageInfo$ = results.pipe(
      map(({data}) => data.comments.pageInfo)
    );

    this.loading$ = results.pipe(
      map(({loading}) => loading)
    );

    this.comments$ = results.pipe(
      map(({ data }) => data.comments.edges.map((e) => e.node))
    );

    this.participants$ = results.pipe(
      map(({ data }) => data.comments.uniqueCommenters)
    );
  }

  onLoadMore(cursor: Maybe<string>): void {
    this.queryRef$.fetchMore({
      variables: {
        first: this.pageSize,
        after: cursor,
      },
    });
  }

  onParticipantSelected(u: Maybe<LinkableUser>): void {
    this.queryRef$.refetch({
      first: this.pageSize,
      originatingUserId: u?.id
    })
  }
}