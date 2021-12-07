import { useState } from 'react';

export const useHook = (initialValue: any) => {
  const hook = useState(initialValue);
  return [...hook];
};
