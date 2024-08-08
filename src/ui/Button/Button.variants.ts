import { cva, VariantProps } from 'cva';
import styles from './Button.module.css';

export const button = cva({
  base: [styles.btn, styles.rounded].join(' '),
  variants: {
    variant: {
      primary: [
        styles.primary,
        styles['white-text'],
        styles['transparent-border'],
      ],
      secondary: [styles.secondary, styles['black-text']],
    },
    size: {
      sm: [styles['sm-text'], styles['p-2']],
      md: [styles['md-text'], styles['p-4']],
      lg: [styles['lg-text'], styles['p-8']],
    },
  },
  compoundVariants: [
    {
      size: 'lg',
      className: styles.uppercase,
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariantStyles = VariantProps<typeof button>;
