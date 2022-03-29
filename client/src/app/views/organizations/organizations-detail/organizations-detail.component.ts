import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, OrganizationDetailFieldsFragment, OrganizationDetailGQL, OrganizationDetailQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import {
    OrganizationDetailQuery
  } from '@app/generated/civic.apollo'
import { pluck, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { RouteableTab } from "@app/components/shared/tab-navigation/tab-navigation.component";

@Component({
    selector: 'organizations-detail',
    templateUrl: './organizations-detail.component.html',
    styleUrls: ['./organizations-detail.component.less']
})

export class OrganizationsDetailComponent {
    queryRef: QueryRef<OrganizationDetailQuery, OrganizationDetailQueryVariables>;

    organization$: Observable<Maybe<OrganizationDetailFieldsFragment>>;
    loading$: Observable<boolean>;
    viewer$: Observable<Viewer>;

    tabs: RouteableTab[]

    constructor(private gql: OrganizationDetailGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

        const organizationId: number = +this.route.snapshot.params['organizationId'];

        this.queryRef = this.gql.watch({organizationId: organizationId});

        let observable = this.queryRef.valueChanges

        this.loading$ = observable.pipe(
            pluck('loading'),
            startWith(true));

        this.organization$ = observable.pipe(
        pluck('data', 'organization'));

        this.viewer$ = this.viewerService.viewer$;

        this.tabs = [
            {
                routeName: 'members',
                tabLabel: 'Members',
                iconName: 'pic-right'
            },
            {
                routeName: 'groups',
                tabLabel: 'Child Organizations',
                iconName: 'civic:organization'
            },
            {
                routeName: 'activity',
                tabLabel: 'Activity',
                iconName: 'civic:event'
            },
            {
                routeName: 'evidence',
                tabLabel: 'Evidence Items',
                iconName: 'civic:evidence'
            },
            {
                routeName: 'assertions',
                tabLabel: 'Assertions',
                iconName: 'civic:assertion'
            },
        ]
    }
}