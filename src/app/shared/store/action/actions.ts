import { createAction } from '@reduxjs/toolkit';

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}
const CHECKOUT_ACTION = createAction('checkout', withPayloadType<string>());
export default CHECKOUT_ACTION;
