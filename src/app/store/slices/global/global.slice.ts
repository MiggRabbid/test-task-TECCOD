import { createSlice } from '@reduxjs/toolkit';

import { initialGlobalState } from './global.config';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPayloadChangeService, IPayloadChangeCartDrawer } from './';

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    /* Добавление в корзину */
    addToCart(state, action: PayloadAction<IPayloadChangeService>) {
      const { serviceId } = action.payload;

      const service = state.services.find((s) => s.id === serviceId);
      const existing = state.cart.find((x) => x.serviceId === serviceId);
      if (!service) return;

      if (service.type === 'countable' && !existing) {
        state.cart.push({ serviceId, qty: 1, type: service.type });
      } else if (service.type === 'countable' && existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ serviceId, qty: 1, type: service.type });
      }
    },
    /* Уменьшение кол-ва в корзине*/
    decrementFromCart(state, action: PayloadAction<IPayloadChangeService>) {
      const { serviceId } = action.payload;
      const service = state.services.find((s) => s.id === serviceId);
      const existing = state.cart.find((x) => x.serviceId === serviceId);

      if (!service || service.type === 'uncountable' || !existing) return;

      const updatedCounter = existing.qty - 1;

      if (updatedCounter <= 0) {
        state.cart = state.cart.filter((x) => x.serviceId !== serviceId);
      } else {
        existing.qty = updatedCounter;
      }
    },
    /* Удаление из корзины */
    removeFromCart(state, action: PayloadAction<IPayloadChangeService>) {
      const { serviceId } = action.payload;
      state.cart = state.cart.filter((x) => x.serviceId !== serviceId);
    },
    /* Очистка корзины */
    clearCart(state) {
      state.cart = [];
    },
    /* Изменение состояния корзины*/
    changeCartDrawerState(state, action: PayloadAction<IPayloadChangeCartDrawer>) {
      const { drawerState } = action.payload;
      state.cartDrawer = drawerState;
    },
  },
});

export const { actions } = globalSlice;
export const globalReducer = globalSlice.reducer;
