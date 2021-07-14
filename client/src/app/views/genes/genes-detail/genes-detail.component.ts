import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';
import {
  GeneDetailFieldsFragment,
  GeneDetailGQL,
  Maybe,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less'],
})
export class GenesDetailComponent implements OnDestroy {
  loading$?: Observable<boolean>;
  gene$?: Observable<Maybe<GeneDetailFieldsFragment>>;
  viewer$?: Observable<Viewer>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;

  routeSub: Subscription;

  constructor(
    private gql: GeneDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ geneId: +params.geneId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.gene$ = observable.pipe(pluck('data', 'gene'));

      this.commentsTotal$ = this.gene$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.gene$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.gene$.pipe(pluck('revisions', 'totalCount'));

      this.viewer$ = this.viewerService.viewer$;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}