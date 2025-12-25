import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@store/index';

interface IStoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
