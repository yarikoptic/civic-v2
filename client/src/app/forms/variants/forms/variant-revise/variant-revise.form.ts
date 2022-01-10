import {
  Component,
  Input,

  OnDestroy,
} from '@angular/core';

import {
  FormGroup,
} from '@angular/forms';

import {
  BehaviorSubject,
  Subject,
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  VariantRevisableFieldsGQL,
  Organization,
  SuggestVariantRevisionInput,
  Maybe,
  SourceSource,
  RevisableVariantFieldsFragment,
  ReferenceBuild,
  CoordinateFieldsFragment,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { VariantReviseService } from './variant-revise.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as fmt from '@app/forms/shared/input-formatters';
import { $enum } from 'ts-enum-util';
import { formatReferenceBuildEnum } from '@app/core/utilities/enum-formatters/format-reference-build-enum';
import { Chromosomes } from '@app/forms/shared/input-formatters';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormGene {
  id: number
  name: string
}

interface FormVariantType {
  id: number
  name: string
  soid: string
}

interface FormModel {
  id: number;
  comment: string;
  fields: {
    name: string;
    variantAliases: string[];
    description: string;
    sources: FormSource[];
    clinvarIds: string[];
    gene: FormGene;
    referenceBuild: ReferenceBuild;
    ensemblVersion: number;
    hgvsDescriptions: Maybe<string[]>;
    variantTypes: FormVariantType[];
    fivePrimeCoordinates: CoordinateFieldsFragment;
    threePrimeCoordinates: CoordinateFieldsFragment;
    referenceBases: Maybe<string>;
    variantBases: Maybe<string>;
  }
}

@Component({
  selector: 'cvc-variant-revise-form',
  templateUrl: './variant-revise.form.html',
  styleUrls: ['./variant-revise.form.less']
})
export class VariantReviseForm implements OnDestroy {
  @Input() variantId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  variantRevisionInput!: SuggestVariantRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private revisionService: VariantReviseService,
    private viewerService: ViewerService,
    private revisableFieldsGQL: VariantRevisableFieldsGQL,
  ) {

    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.revisionService.submitError$;
    this.isSubmitting$ = this.revisionService.isSubmitting$;
    this.submitSuccess$ = this.revisionService.submitSuccess$;

    this.formFields = [
      {
        key: 'id',
        type: 'input',
        hide: true,
      },
      {
        key: 'fields.description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: 'Enter a description for this variant.',
          required: false
        }
      },
      {
        key: 'fields.sources',
        type: 'multi-field',
        templateOptions: {
          label: 'Sources',
          addText: 'Add another Source',
        },
        fieldArray: {
          type: 'source-input',
          templateOptions: {
            required: true
          }
        }
      },
      {
        key: 'fields.variantAliases',
        type: 'multi-field',
        templateOptions: {
          label: 'Variant Aliases',
          addText: 'Add an Alias',
        },
        fieldArray: {
          type: 'input',
          templateOptions: {
            required: true,
            placeholder: 'Add Alias'
          }
        }
      },
      {
        key: 'fields.hgvsDescriptions',
        type: 'multi-field',
        templateOptions: {
          label: 'HGVS Descriptions',
          addText: 'Add an HGVS Description'
        },
        fieldArray: {
          type: 'input',
          templateOptions: {
            required: true,
            placeholder: 'Enter an HGVS string'
          }
        }
      },
      {
        key:'fields.clinvarIds',
        type: 'multi-field',
        templateOptions: {
          label: 'ClinVar IDs',
          addText: 'Add a ClinVar ID'
        },
        fieldArray: {
          type: 'input',
          templateOptions: {
            required: true,
            placeholder: 'Enter a ClinVar ID'
          }
        }
      },
      {
        key: 'fields.variantTypes',
        type: 'multi-field',
        templateOptions: {
          label: 'Variant Types',
          addText: 'Add a Variant Type'
        },
        fieldArray: {
          type: 'variant-type-input',
          templateOptions: {
            required: true
          }
        }
      },
      {
        template: '<h3>Primary Coordinates</h3>',
      },
      {
        key: 'fields.referenceBuild',
        type: 'select',
        defaultValue: ReferenceBuild.Grch37,
        templateOptions: {
          label: 'Reference Build',
          required: false,
          options: $enum(ReferenceBuild)
            .map((value, key) => {
              return { value: value, label: formatReferenceBuildEnum(value)}
            })
        }
      },
      {
        key: 'fields.ensemblVersion',
        type: 'input',
        templateOptions: {
          label: 'Ensembl Version',
        },
        validators: {
          validation: ['ensembl']
        }
      },
      {
        key: 'fields.fivePrimeCoordinates.chromosome',
        type: 'select',
        defaultValue: undefined,
        templateOptions: {
          label: 'Chromosome',
          required: false,
          options: Chromosomes
        },
      },
      {
        key: 'fields.fivePrimeCoordinates.start',
        type: 'input',
        templateOptions: {
          label: 'Start',
        },
        validators: {
          validation: ['integer']
        }
      },
      {
        key: 'fields.fivePrimeCoordinates.stop',
        type: 'input',
        templateOptions: {
          label: 'Stop',
        },
        validators: {
          validation: ['integer']
        }
      },
      {
        key: 'fields.fivePrimeCoordinates.representativeTranscript',
        type: 'input',
        templateOptions: {
          label: 'Representative Transcript',
        },
      },
      {
        template: '<h3>Secondary Coordinates</h3>',
      },
      {
        key: 'fields.threePrimeCoordinates.chromosome',
        type: 'select',
        defaultValue: undefined,
        templateOptions: {
          label: 'Chromosome',
          required: false,
          options: Chromosomes
        },
      },
      {
        key: 'fields.threePrimeCoordinates.start',
        type: 'input',
        templateOptions: {
          label: 'Start',
        },
        validators: {
          validation: ['integer']
        }
      },
      {
        key: 'fields.threePrimeCoordinates.stop',
        type: 'input',
        templateOptions: {
          label: 'Stop',
        },
        validators: {
          validation: ['integer']
        }
      },
      {
        key: 'fields.threePrimeCoordinates.representativeTranscript',
        type: 'input',
        templateOptions: {
          label: 'Representative Transcript',
        },
      },
      {
        key: 'comment',
        type: 'comment-textarea',
        templateOptions: {
          label: 'Comment',
          placeholder: 'Please enter a comment describing your revision.',
          required: true,
          minLength: 10
        },
      }
    ]

    // reset form upon successful submit
    this.submitSuccess$
      .pipe(takeUntil(this.destroy$))
      .subscribe(s => {
        if (s && this.formOptions.resetModel) {
          this.formOptions.resetModel();
        }
      })
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ variantId: this.variantId })
      .subscribe(({ data: { variant } }) => {
        if (variant) {
          this.formModel = this.toFormModel(variant);
        } else {
          // TODO: handle errors with subscribe({complete, error})
          console.error('Could not retrieve variant.');
        }
        if (this.formOptions.updateInitialValue) {
          this.formOptions.updateInitialValue();
        }
      });
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(formModel: FormModel): void {
    this.revisionService
      .suggest(this.toRevisionInput(formModel));
  }

  toFormModel(variant: RevisableVariantFieldsFragment): FormModel {
    return <FormModel>{
      id: variant.id,
      fields: {
        ...variant,
        // TODO: probably incorrect - assuming root ref/var bases can be plucked from
        // fivePrimeCoordinates
        referenceBases: variant.fivePrimeCoordinates?.referenceBases,
        variantBases: variant.fivePrimeCoordinates?.variantBases,
      },
      comment: '',
      organizationId: undefined
    }
  }

  toRevisionInput(model: FormModel): SuggestVariantRevisionInput {
    const fields = model.fields;
    return <SuggestVariantRevisionInput>{
      ...model,
      fields: {
        name: fields.name,
        geneId: fields.gene.id,
        ensemblVersion: +fields.ensemblVersion,
        description: fmt.toNullableString(fields.description),
        clinvarIds: fmt.toClinvarInput(fields.clinvarIds),
        primaryCoordinates: fmt.toCoordinateInput(fields.fivePrimeCoordinates),
        secondaryCoordinates: fmt.toCoordinateInput(fields.threePrimeCoordinates),
        referenceBases: fmt.toNullableString(fields.referenceBases),
        variantBases: fmt.toNullableString(fields.variantBases),
        referenceBuild: fmt.toNullableReferenceBuildInput(fields.referenceBuild),
        hgvsDescriptions: fields.hgvsDescriptions,
        sourceIds: model.fields.sources.map((s: any) => { return +s.id }),
        variantTypeIds: model.fields.variantTypes.map((vt: any) => { return +vt.id }),
        aliases: model.fields.variantAliases,
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.revisionService.cleanup();
  }

}