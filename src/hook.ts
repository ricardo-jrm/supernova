import { useState } from 'react';

/**
 * Exported Hook
 */
export const useHook = <T>(initialValue: T) => {
  const [state, stateSet] = useState<T>(initialValue);
  return [state, stateSet];
};
