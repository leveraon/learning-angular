import { createAction } from '@reduxjs/toolkit';

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}
export const CHECKOUT = createAction('checkout', withPayloadType<string>());
export const CLOSE_CHECKOUT = createAction('close', withPayloadType<string>());
