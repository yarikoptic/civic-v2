import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

const requiredValidationMsgFn = (): string => {
  return 'Evidence requires that a Variant be specified.';
};

export const variantArrayTypeOption: TypeOption = {
  name: 'variant-array',
  extends: 'multi-field',
  defaultOptions: {
    templateOptions: {
      label: 'Variant',
      helpText: 'Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).',
      required: false,
      addText: 'Specify a Variant',
    },
    fieldArray: {
      type: 'variant-input',
      templateOptions: {
        required: false
      }
    },
    defaultValue: [],
    validation: {
      messages: {
        required: requiredValidationMsgFn
      },
    },
  }
}