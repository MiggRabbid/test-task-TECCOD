import type { RootState } from '@store/index';
import type { IGlobalState } from '@/app/store';

/*
 * global slice
 */
// (global) Получаем поля слайса
export const getGlobalField =
  <K extends keyof IGlobalState>(field: K) =>
  (state: RootState) =>
    state.globalReducer[field];

export const getServiceItem = (serviceId: string) => (state: RootState) =>
  state.globalReducer.services.find((item) => item.id === serviceId) ?? null;

export const getCartItem = (serviceId: string) => (state: RootState) =>
  state.globalReducer.cart.find((item) => item.serviceId === serviceId) ?? null;
