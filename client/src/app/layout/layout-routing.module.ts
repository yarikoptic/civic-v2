import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@app/layout/layout.component';

const routes: Routes = [
  // Redirects
  { path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },

  // Main Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Primary Views
      { path: 'assertions',
        loadChildren: () => import('@app/views/assertions/assertions.module').then(m => m.AssertionsModule),
        data: {
          breadcrumb: 'Assertions'
        }
      },
      { path: 'clinical-trials' ,
        loadChildren: () => import('@app/views/clinical-trials/clinical-trials.module').then(m => m.ClinicalTrialsModule),
        data: {
          breadcrumb: 'Clinical Trials'
        }
      },
      { path: 'comments', loadChildren: () => import('@app/views/comments/comments.module').then(m => m.CommentsModule),
        data: {
          breadcrumb: 'Comments'
        }
      },
      { path: 'community',
        loadChildren: () => import('@app/views/community/community.module').then(m => m.CommunityModule),
        data: {
          breadcrumb: 'Community'
        }
      },
      { path: 'diseases',
        loadChildren: () => import('@app/views/diseases/diseases.module').then(m => m.DiseasesModule),
        data: {
          breadcrumb: 'Diseases'
        }
      },
      { path: 'drugs',
        loadChildren: () => import('@app/views/drugs/drugs.module').then(m => m.DrugsModule),
        data: {
          breadcrumb: 'Drugs'
        }
      },
      { path: 'evidence',
        loadChildren: () => import('@app/views/evidence/evidence.module').then(m => m.EvidenceModule),
        data: {
          breadcrumb: 'Evidence'
        }
      },
      { path: 'flags',
        loadChildren: () => import('@app/views/flags/flags.module').then(m => m.FlagsModule),
        data: {
          breadcrumb: 'Flags'
        }
      },
      {
        path: 'genes',
        loadChildren: () => import('@app/views/genes/genes.module').then(m => m.GenesModule),
        data: {
          breadcrumb: 'Genes'
        }
      },
      { path: 'organizations',
        loadChildren: () => import('@app/views/organizations/organizations.module').then(m => m.OrganizationsModule),
        data: {
          breadcrumb: 'Organizations'
        }
      },
      { path: 'phenotypes',
        loadChildren: () => import('@app/views/phenotypes/phenotypes.module').then(m => m.PhenotypesModule),
        data: {
          breadcrumb: 'Phenotypes'
        }
      },
      { path: 'revisions',
        loadChildren: () => import('@app/views/revisions/revisions.module').then(m => m.RevisionsModule),
        data: {
          breadcrumb: 'Revisions'
        }
      },
      { path: 'sources',
        loadChildren: () => import('@app/views/sources/sources.module').then(m => m.SourcesModule),
        data: {
          breadcrumb: 'Sources'
        }
      },
      { path: 'source-suggestions',
        loadChildren: () => import('@app/views/source-suggestions/source-suggestions.module').then(m => m.SourceSuggestionsModule),
        data: {
          breadcrumb: 'SourceSuggestions'
        }
      },
      { path: 'users',
        loadChildren: () => import('@app/views/users/users.module').then(m => m.UsersModule),
        data: {
          breadcrumb: 'Users'
        }
      },
      { path: 'variant-groups',
        loadChildren: () => import('@app/views/variant-groups/variant-groups.module').then(m => m.VariantGroupsModule),
        data: {
          breadcrumb: 'Variant Groups'
        }},
      { path: 'variants',
        loadChildren: () => import('@app/views/variants/variants.module').then(m => m.VariantsModule),
        data: {
          breadcrumb: 'Variants'
        }
      },
      { path: 'variant-types',
        loadChildren: () => import('@app/views/variant-types/variant-types.module').then(m => m.VariantTypesModule),
        data: {
          breadcrumb: 'Variant Types'
        }
      },

      // Other App Views
      { path: 'welcome',
        loadChildren: () => import('@app/views/welcome/welcome.module').then(m => m.WelcomeModule),
        data: {
          breadcrumb: 'Welcome to CIViC'
        }
      },
      { path: 'statistics',
        loadChildren: () => import('@app/views/statistics/statistics.module').then(m => m.StatisticsModule),
        data: {
          breadcrumb: 'Statistics'
        }
      },
      { path: 'releases',
        loadChildren: () => import('@app/views/releases/releases.module').then(m => m.ReleasesModule),
        data: {
          breadcrumb: 'Releases'
        }
      },
      { path: 'pages',
        loadChildren: () => import('@app/views/pages/pages.module').then(m => m.PagesModule),
        data: {
          breadcrumb: 'Pages'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }