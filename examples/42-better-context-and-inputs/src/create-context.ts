import * as React from 'react';

export function createContext<T extends {} | null>() {
  const context = React.createContext<T | undefined>(undefined);
  const useContext = () => {
    const c = React.useContext(context);
    if (c === undefined) {
      throw new Error('no conext provided');
    }
    return c;
  };

  return [useContext, context.Provider] as const;
}
