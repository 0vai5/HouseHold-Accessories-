'use client'

import react from 'react'
import { Provider } from 'react-redux';
import { store } from '@/app/store';

const ReduxProvider = ({children}: {children: react.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProvider;
