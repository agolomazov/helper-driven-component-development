import { ButtonProps } from './Button.props';
import { button } from './Button.variants';

/**
 * Базовая кнопка
 */
const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={button({ variant, size, className })}>
      {children}
    </button>
  );
};

export default Button;
