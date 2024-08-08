import { cva, VariantProps } from 'cva';
import styles from './ClipBoard.module.css';

export const clipboardVariants = cva({
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

export type ClipboardVariantsStyle = VariantProps<typeof clipboardVariants>;
