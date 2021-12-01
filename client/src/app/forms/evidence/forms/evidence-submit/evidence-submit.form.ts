import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceSubmittableFieldsGQL,
  EvidenceType,
  Maybe,
  Organization,
  SourceSource,
  SubmitEvidenceItemInput,
  SubmittableEvidenceFieldsFragment,
  VariantOrigin,
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/shared/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { $enum } from 'ts-enum-util';
import { EvidenceItemSubmitService } from './evidence-submit.service';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
}

interface FormDrug {
  id?: number;
  ncitId?: string;
  name?: string;
}

interface FormPhenotype {
  id?: number;
  hpoId?: string;
  name?: string;
}

interface FormVariant {
  id?: number;
  name: string;
}

interface FormGene {
  id?: number;
  name?: string;
}

 // description: NullableStringInput!
 // The Evidence Items's description/summary text.

 // variantId: Int!
 // The ID of the Variant to which this EvidenceItem belongs

 // variantOrigin: VariantOrigin!
 // The Variant Origin for this EvidenceItem.

 // sourceId: Int!
 // The ID of the Source from which this EvidenceItem was curated.

 // evidenceType: EvidenceType!
 // The Type of the EvidenceItem

 // clinicalSignificance: EvidenceClinicalSignificance!
 // The Clinical Significance of the EvidenceItem

 // diseaseId: NullableIntInput!
 // The ID of the disease (if applicable) for this EvidenceItem

 // evidenceLevel: EvidenceLevel!
 // The evidence level of the EvidenceItem

 // evidenceDirection: EvidenceDirection!
 // The evidence direction for this EvidenceItem.

 // phenotypeIds: [Int!]!
 // List of IDs of CIViC Phenotype entries for this EvidenceItem. An empty list indicates none.

 // rating: Int!
 // The rating for this EvidenceItem

 // drugIds: [Int!]!
 // List of IDs of CIViC Drug entries for this EvidenceItem. An empty list indicates none.

 // drugInteractionType: NullableDrugInteractionTypeInput!
 // Drug interaction type for cases where more than one drug ID is provided.

interface FormModel {
  id: number;
  // comment: string;
  organizationId: Maybe<Organization>,
  fields: {
    clinicalSignificance: EvidenceClinicalSignificance;
    description: string;
    disease: FormDisease[];
    drugInteractionType: Maybe<DrugInteraction>;
    drugs: FormDrug[];
    evidenceDirection: EvidenceDirection;
    evidenceLevel: EvidenceLevel;
    evidenceType: EvidenceType;
    phenotypes: FormPhenotype[];
    evidenceRating: number;
    source: FormSource[];
    variant: FormVariant[];
    variantOrigin: VariantOrigin;
  };
}

@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  styleUrls: ['./evidence-submit.form.less']
})
export class EvidenceSubmitForm implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  evidenceSubmitInput!: SubmitEvidenceItemInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private submitService: EvidenceItemSubmitService,
    private viewerService: ViewerService,
    private submittableFieldsGQL: EvidenceSubmittableFieldsGQL
  ) {

    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.submitService.submitError$;
    this.isSubmitting$ = this.submitService.isSubmitting$;
    this.submitSuccess$ = this.submitService.submitSuccess$;

    this.formFields = [
      {
        key: 'id',
        type: 'input',
        hide: true
      },
      {
        key: 'fields.gene',
        type: 'multi-field',
        templateOptions: {
          label: 'Gene',
          addText: 'Specify a Gene',
          maxCount: 1,
        },
        fieldArray: {
          type: 'gene-input',
          templateOptions: {
            required: true,
          },
        },
      },
      {
        key: 'fields.variant',
        type: 'multi-field',
        templateOptions: {
          label: 'Variant',
          addText: 'Specify a Variant',
          maxCount: 1,
        },
        fieldArray: {
          type: 'variant-input',
          templateOptions: {
            required: true,
          },
        },
      },
      {
        key: 'fields.variantOrigin',
        type: 'select',
        templateOptions: {
          label: 'Variant Origin',
          required: true,
          options: $enum(VariantOrigin)
            .map((value, key) => {
              return { value: value, label: formatEvidenceEnum(value) }
            })
        }
      },
      {
        key: 'fields.source',
        type: 'multi-field',
        templateOptions: {
          label: 'Source',
          addText: 'Add a Source',
          maxCount: 1,
        },
        fieldArray: {
          type: 'source-input',
          templateOptions: {
            required: true,
          },
        },
      },
      {
        key: 'fields.evidenceType',
        type: 'select',
        templateOptions: {
          label: 'Evidence Type',
          required: true,
          options: $enum(EvidenceType)
            .map((value, key) => {
              return { value: value, label: formatEvidenceEnum(value) }
            })
        }
      },
      {
        key: 'fields.clinicalSignificance',
        type: 'select',
        templateOptions: {
          label: 'Clinical Signficance',
          required: true,
          options: $enum(EvidenceClinicalSignificance)
            .map((value, key) => {
              return { value: value, label: formatEvidenceEnum(value) }
            })
        }
      },
      {
        key: 'fields.disease',
        type: 'multi-field',
        templateOptions: {
          label: 'Disease',
          addText: 'Add a Disease',
          minLength: 1,
          maxCount: 1,
        },
        fieldArray: {
          type: 'disease-input',
          templateOptions: {}
        }
      },
      {
        key: 'fields.description',
        type: 'textarea',
        templateOptions: {
          label: 'Evidence Statement',
          placeholder: 'Please enter statement describing this evidence item.',
          required: true
        }
      },
      {
        key: 'fields.evidenceLevel',
        type: 'select',
        templateOptions: {
          label: 'Evidence Level',
          required: true,
          placeholder: 'Please select an Evidence Level',
          options: $enum(EvidenceLevel)
            .map((value, key) => {
              return { value: value, label: key }
            })
        }
      },
      {
        key: 'fields.evidenceDirection',
        type: 'select',
        templateOptions: {
          label: 'Evidence Direction',
          placeholder: 'Please select an Evidence Direction',
          required: true,
          options: $enum(EvidenceDirection)
            .map((value, key) => {
              return { value: value, label: formatEvidenceEnum(value) }
            })
        }
      },
      {
        key: 'fields.drugs',
        type: 'multi-field',
        templateOptions: {
          label: 'Drug(s)',
          required: false,
          addText: 'Add a Drug',
        },
        fieldArray: {
          type: 'drug-input',
          templateOptions: {
          },
        },
      },
      {
        key: 'fields.drugInteractionType',
        type: 'select',
        templateOptions: {
          label: 'Drug InteractionType',
          required: false,
          placeholder: 'Please select a Drug Interaction Type',
          options: $enum(DrugInteraction)
            .map((value, key) => {
              return { value: value, label: key }
            })
        }
      },
      {
        key: 'fields.phenotypes',
        type: 'multi-field',
        templateOptions: {
          label: 'Associated Phenotypes',
          required: false,
          addText: 'Add a Phenoype'
        },
        fieldArray: {
          type: 'phenotype-input',
          templateOptions: {
          }
        }
      },
      {
        key: 'fields.evidenceRating',
        type: 'rating-input',
        templateOptions: {
          label: 'Rating',
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

    ];
  }

  ngOnInit(): void {
    // // fetch latest revisable field values, update form fields
    // this.submittableFieldsGQL.fetch({ evidenceId: this.evidenceId })
    //   .subscribe(({ data: { evidenceItem } }) => {
    //     if (evidenceItem) {
    //       this.formModel = this.toFormModel(evidenceItem);
    //     } else {
    //       // TODO: handle errors with subscribe({complete, error})
    //       console.error('Evidence Revise form could not retrieve evidence item.');
    //     }
    //     if (this.formOptions.updateInitialValue) {
    //       this.formOptions.updateInitialValue();
    //     }
    //   });
  }

  // toFormModel(evidence: SubmittableEvidenceFieldsFragment): FormModel {
  //   return <FormModel>{
  //     id: evidence.id,
  //     // comment: '',
  //     organizationId: undefined,
  //     fields: {
  //       ...evidence,
  //       source: [evidence.source], // wrapping an array so multi-field will display source properly until we write a single-source option
  //       drugs: evidence.drugs.length > 0 ? evidence.drugs : [],
  //       disease: [evidence.disease],
  //     },
  //   }
  // }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitEvidence(formModel: FormModel): void {
    this.submitService
      .submit(this.toSubmitInput(formModel));
  }

  toSubmitInput(model: FormModel): SubmitEvidenceItemInput {
    const fields = model.fields;
    return <SubmitEvidenceItemInput>{
      ...model,
      fields: {
        variantOrigin: fields.variantOrigin,
        description: fmt.toNullableString(fields.description),
        variantId: fields.variant[0].id,
        sourceId: fields.source[0].id,
        evidenceType: fields.evidenceType,
        evidenceDirection: fields.evidenceDirection,
        clinicalSignificance: fields.clinicalSignificance,
        diseaseId: fmt.toNullableInt(fields.disease[0]?.id),
        evidenceLevel: fields.evidenceLevel,
        phenotypeIds: fields.phenotypes ? fields.phenotypes.map((ph: FormPhenotype) => { return ph.id }) : [],
        rating: +fields.evidenceRating,
        drugIds: fields.drugs ? fields.drugs.map((dr: FormDrug) => { return dr.id }) : [],
        drugInteractionType: fmt.toNullableDrugInteractionTypeInput(fields.drugInteractionType)
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.submitService.cleanup();
  }

}