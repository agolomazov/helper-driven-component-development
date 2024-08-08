import * as clipboard from '@zag-js/clipboard';
import { useMachine, normalizeProps } from '@zag-js/react';
import { ClipboardCheck, ClipboardCopyIcon } from 'lucide-react';
import { clipboardVariants } from './Clipboard.variants';

import { useId } from 'react';
import { type ClipboardProps } from './Clipboard.props';

const Clipboard = ({
  value,
  label,
  message,
  className,
  variant,
  ...props
}: ClipboardProps) => {
  const [state, send] = useMachine(
    clipboard.machine({
      id: useId(),
      value,
    })
  );

  const api = clipboard.connect(state, send, normalizeProps);

  return (
    <div
      {...props}
      {...api.getRootProps()}
      className={clipboardVariants({ variant, className })}
    >
      {label && <label {...api.getLabelProps()}>{label}</label>}
      <div {...api.getControlProps()}>
        <input {...api.getInputProps()} readOnly />
        <button {...api.getTriggerProps()}>
          {api.copied ? <ClipboardCheck /> : <ClipboardCopyIcon />}
        </button>
      </div>
      <span data-part='message'>{api.copied && message}</span>
    </div>
  );
};

export default Clipboard;
