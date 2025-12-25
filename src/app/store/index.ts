import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { actions as globalActions, globalReducer } from './slices/global/global.slice';

const rootReducer = combineReducers({ globalReducer });

export const actions = { ...globalActions };

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
