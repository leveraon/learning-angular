import { createReducer, type Reducer } from '@reduxjs/toolkit';
import { CheckoutState } from '../state/checkout.state';
import { CHECKOUT, CLOSE_CHECKOUT } from '../action/checkout-panel-actions';

const checkoutState: CheckoutState = {
  action: '',
  payload: undefined,
};

const checkoutPanelReducer = createReducer(checkoutState, (builder) =>
  builder
    .addCase(CHECKOUT, (state, action) => {
      state.action = action.type;
      state.payload = action.payload;
    })
    .addCase(CLOSE_CHECKOUT, (state, action) => {
      state.action = action.type;
      state.payload = action.payload;
    }),
);
export default checkoutPanelReducer;
