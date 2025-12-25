import { createSlice } from '@reduxjs/toolkit';

import { initialGlobalState } from './card.config';

import type { PayloadAction } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    /* Добавление в корзину */
    addToCart(state, action: PayloadAction<{ serviceId: string }>) {
      const { serviceId } = action.payload;

      const service = state.services.find((s) => s.id === serviceId);
      const existing = state.cart.find((x) => x.serviceId === serviceId);
      if (!service) return;

      if (service.type === 'countable' || !existing) {
        state.cart.push({ serviceId, qty: 1, type: service.type });
      } else if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ serviceId, qty: 1, type: service.type });
      }
    },
    /* Уменьшение кол-ва в корзине*/
    decrementFromCart(state, action: PayloadAction<{ serviceId: string }>) {
      const { serviceId } = action.payload;
      const service = state.services.find((s) => s.id === serviceId);
      const existing = state.cart.find((x) => x.serviceId === serviceId);

      if (!service || service.type === 'uncountable' || !existing) return;

      existing.qty -= 1;

      if (existing.qty <= 0) {
        state.cart = state.cart.filter((x) => x.serviceId !== serviceId);
      }
    },
    /* Удаление из корзины */
    removeFromCart(state, action: PayloadAction<{ serviceId: string }>) {
      const { serviceId } = action.payload;
      state.cart = state.cart.filter((x) => x.serviceId !== serviceId);
    },
    /* Очистка корзины*/
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { actions } = globalSlice;
export const globalReducer = globalSlice.reducer;
