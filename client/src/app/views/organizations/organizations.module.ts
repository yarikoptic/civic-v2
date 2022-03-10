import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { FormsModule } from '@angular/forms';

import { IconsProviderModule } from '@app/icons-provider.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EvidenceModule } from '../evidence/evidence.module';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import { OrganizationsMembersComponent } from './organizations-members/organizations-members.component';
import { OrganizationsEvidenceComponent } from './organizations-evidence/organizations-evidence.component';
import { OrganizationsAssertionsComponent } from './organizations-assertions/organizations-assertions.component';
import { OrganizationsEventsComponent } from './organizations-events/organizations-events.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { OrganizationsGroupsComponent } from './organizations-groups/organizations-groups.component';
import { OrganizationsHomeModule } from './organizations-home/organizations-home.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { CvcOrganizationCardModule } from '@app/components/organizations/organization-card/organization-card.module';
import { CvcUserCardModule } from '@app/components/users/user-card/user-card.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { OrganizationsSourceSuggestionsComponent } from './organizations-source-suggestions/organizations-source-suggestions.component';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';


@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationsDetailComponent,
    OrganizationsMembersComponent,
    OrganizationsEvidenceComponent,
    OrganizationsAssertionsComponent,
    OrganizationsEventsComponent,
    OrganizationsGroupsComponent,
    OrganizationsSourceSuggestionsComponent
  ],
  imports: [
    CommonModule,
    OrganizationsHomeModule,
    CvcAssertionsTableModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    OrganizationsRoutingModule,
    CvcLinkTagModule,
    CvcOrganizationTagModule,
    CvcOrganizationCardModule,
    CvcUserCardModule,
    CvcEventFeedModule,

    IconsProviderModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    ReactiveComponentModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    NzInputModule,
    FormsModule,
    CvcTabNavigationModule,
    NzSelectModule,
    EvidenceModule,
    NzImageModule,
    NzStatisticModule,
    CvcSectionNavigationModule,
    CvcSourceSuggestionsTableModule
  ],
  exports: [
    OrganizationsComponent,
    OrganizationsDetailComponent,
    OrganizationsMembersComponent,
    OrganizationsEvidenceComponent,
    OrganizationsAssertionsComponent,
    OrganizationsEventsComponent,
    OrganizationsGroupsComponent,
    OrganizationsSourceSuggestionsComponent
  ]
})
export class OrganizationsModule { }