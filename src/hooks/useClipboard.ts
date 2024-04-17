import React from 'react';
import copy from 'copy-to-clipboard';

interface IOptions {
  /**
   * Reset the status after a certain number of milliseconds. This is useful
   * for showing a temporary success message.
   */
  successDuration?: number;
}
/**
 * @source https://github.com/danoc/react-use-clipboard/tree/main
 * @param text
 * @param options
 * @returns
 */
export default function useClipboard(text: string, options?: IOptions): [boolean, () => void] {
  const [isCopied, setIsCopied] = React.useState(false);
  const successDuration = options && options.successDuration;

  React.useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    },
  ];
}
