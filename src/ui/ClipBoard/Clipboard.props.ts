import { HTMLAttributes } from 'react';
import { ClipboardVariantsStyle } from './Clipboard.variants';

export type ClipboardProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  label?: string;
  message?: string;
} & ClipboardVariantsStyle & {
    variant?: 'primary' | 'secondary';
  };
