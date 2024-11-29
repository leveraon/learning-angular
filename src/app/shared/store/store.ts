import { configureStore, Tuple } from '@reduxjs/toolkit';
import checkoutPanelReducer from './reducer/checkout-panel.reducer';
// import { logger } from '../logger/logger';

export const LATStore = configureStore({
  reducer: {
    checkout: checkoutPanelReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: logger,
  //     },
  //     serializableCheck: false,
  //   }),
  devTools: true,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: false,
    }),
});