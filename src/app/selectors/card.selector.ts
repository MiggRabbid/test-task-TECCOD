import type { RootState } from '@store/index';
import type { IGlobalState } from '@/app/store/slices/card/card.types';

/*
 * Global slice
 */
// (Global) Получаем поля слайса
export const getGlobalField =
  <K extends keyof IGlobalState>(field: K) =>
  (state: RootState) =>
    state.globalReducer[field];
