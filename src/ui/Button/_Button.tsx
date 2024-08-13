import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonClsxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variants?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

const ButtonClsx = ({
  className,
  children,
  variants = 'primary',
  size = 'md',
  ...props
}: ButtonClsxProps) => {
  return (
    <button
      {...props}
      className={clsx(className, {
        [styles.btn]: true,
        [styles.rounded]: true,
        [styles.primary]: variants === 'primary',
        [styles['white-text']]: variants === 'primary',
        [styles['transparent-border']]: variants === 'primary',
        [styles.secondary]: variants === 'secondary',
        [styles['black-text']]: variants === 'secondary',
        [styles['sm-text']]: size === 'sm',
        [styles['p-2']]: size === 'sm',
        [styles['md-text']]: size === 'md',
        [styles['p-4']]: size === 'md',
        [styles['lg-text']]: size === 'lg',
        [styles['p-8']]: size === 'lg',
        [styles.uppercase]: size === 'lg',
      })}
    >
      {children}
    </button>
  );
};

export default ButtonClsx;
