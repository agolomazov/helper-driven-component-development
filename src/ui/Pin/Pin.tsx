import * as pinInput from '@zag-js/pin-input';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';
import { PinInputProps } from './Pin.props';
import { pinVariants } from './Pin.variants';

const Pin = ({
  value,
  className,
  variant,
  placeholder,
  type,
  mask = true,
  dir = 'ltr',
  name,
  autoFocus,
  onValueComplete,
  onValueChange,
  disabled = false,
  invalid = false,
  required = false,
  readOnly = false,
}: PinInputProps) => {
  const [state, send] = useMachine(
    pinInput.machine({
      id: useId(),
      value,
      placeholder,
      type,
      mask,
      dir,
      name,
      autoFocus,
      disabled,
      invalid,
      required,
      readOnly,
      onValueComplete(details) {
        onValueComplete && onValueComplete(details);
      },
      onValueChange(details) {
        onValueChange && onValueChange(details);
      },
    })
  );

  const api = pinInput.connect(state, send, normalizeProps);

  return (
    <div className={pinVariants({ variant, className })}>
      <div {...api.getRootProps()}>
        {value ? (
          value.map((_, idx) => (
            <input key={idx} {...api.getInputProps({ index: idx })} />
          ))
        ) : (
          <>
            <input {...api.getInputProps({ index: 0 })} />
            <input {...api.getInputProps({ index: 1 })} />
            <input {...api.getInputProps({ index: 2 })} />
          </>
        )}
      </div>
      <button onClick={api.clearValue}>Clear value</button>
    </div>
  );
};

export default Pin;
