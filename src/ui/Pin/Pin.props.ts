import { HTMLAttributes } from 'react';
import { PinVariantsStyle } from './Pin.variants';
import { ValueChangeDetails, ValueInvalidDetails } from '@zag-js/pin-input';

export type PinInputProps = HTMLAttributes<HTMLDivElement> & {
  value?: [string, string, string, string];
  placeholder?: string;
  type?: 'alphanumeric' | 'numeric' | 'alphabetic';
  mask?: boolean;
  dir?: 'ltr' | 'rtl';
  name: string;
  disabled?: boolean;
  autoFocus?: boolean;
  invalid?: boolean;
  required?: boolean;
  readOnly?: boolean;
  onValueComplete?: (details: ValueChangeDetails) => void;
  onValueChange?: (details: ValueChangeDetails) => void;
  onValueInvalid?: (details: ValueInvalidDetails) => void;
  selectOnFocus?: boolean;
} & PinVariantsStyle & {
    variant?: 'primary' | 'secondary';
  };
