import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { CvcFieldGridWrapperConfig } from '@app/forms2/wrappers/field-grid/field-grid.wrapper'
import { CvcVariantSelectFieldOption } from '@app/forms2/types/variant-select/variant-select.type'
import { Maybe, Variant } from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'
import {
  FormGene,
  FormMolecularProfile,
  FormVariant,
} from '@app/forms2/forms2.interfaces'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { EntityFieldSubjectMap } from '@app/forms2/states/base.state'
import { Apollo, gql } from 'apollo-angular'

type VariantSubmitModel = {
  geneId?: number
  variantId?: number
}

type VariantSubmitState = {
  formLayout: NzFormLayoutType
  fields: EntityFieldSubjectMap
}

// interface FormModel {
//   fields: {
//     gene: FormGene[]
//     variant: FormVariant[]
//   }
// }

// export interface SelectedVariant {
//   variantId: number
//   molecularProfile: FormMolecularProfile
// }

@Component({
  selector: 'cvc-variant-submit-form',
  templateUrl: './variant-submit.form.html',
  styleUrls: ['./variant-submit.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantSubmitForm {
  @Output() onVariantSelected = new EventEmitter<Variant>()

  newVariant$ = new BehaviorSubject<Maybe<Variant>>(void 0)
  modelChange$ = new BehaviorSubject<Maybe<VariantSubmitModel>>(undefined)
  model: VariantSubmitModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'horizontal'

  finderState: VariantSubmitState = {
    formLayout: this.layout,
    fields: {
      geneId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
    },
  }
  options: FormlyFormOptions

  constructor(private apollo: Apollo) {
    this.form = new UntypedFormGroup({})
    this.model = { geneId: undefined, variantId: undefined }
    this.options = { formState: this.finderState }

    this.config = [
      {
        wrappers: ['field-grid'],
        props: <CvcFieldGridWrapperConfig>{
          grid: {
            cols: 2,
          },
        },
        fieldGroup: [
          {
            key: 'geneId',
            type: 'gene-select',
            props: {
              placeholder: `Select New Variant's Gene`,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
            },
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              placeholder: 'Enter New Variant Name',
              requireGene: true,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
            },
          },
        ],
      },
    ]
  }

  modelChange(model: Maybe<VariantSubmitModel>) {
    if (!model?.variantId) return
    const variant = this.getSelectedVariant(model.variantId)
    if (variant) {
      this.model = {
        geneId: undefined,
        variantId: undefined,
      }
      this.onVariantSelected.next(variant)
      this.newVariant$.next(variant)
    }
  }

  getSelectedVariant(variantId: Maybe<number>): Maybe<Variant> {
    if (!variantId) return
    const fragment = {
      id: `Variant:${variantId}`,
      fragment: gql`
        fragment VariantSelectQuery on Variant {
          id
          name
          link
          variantAliases
          singleVariantMolecularProfileId
          singleVariantMolecularProfile {
            id
            name
            link
            molecularProfileAliases
          }
        }
      `,
    }
    let variant
    try {
      variant = this.apollo.client.readFragment(fragment) as Variant
    } catch (err) {
      console.error(err)
    }
    if (!variant) {
      console.error(`MpFinderForm could not resolve its Variant from the cache`)
      return
    }
    return variant
  }
}