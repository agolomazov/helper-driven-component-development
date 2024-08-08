import { ButtonHTMLAttributes } from 'react';
import { ButtonVariantStyles } from './Button.variants';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantStyles & {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };
