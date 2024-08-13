import { cva, VariantProps } from 'cva';
import styles from './Pin.module.css';

export const pinVariants = cva({
  base: [styles.root].join(' '),
  variants: {
    variant: {
      primary: [styles.primary],
      secondary: [styles.secondary],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type PinVariantsStyle = VariantProps<typeof pinVariants>;
