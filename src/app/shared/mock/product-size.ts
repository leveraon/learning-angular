import { Dictionary } from '@lat-shared/models/dictionary';

export const PRODUCT_SIZE: Dictionary<{
  quantity: number;
  available: boolean;
}> = {
  XXS: {
    quantity: 10,
    available: true,
  },
  XS: {
    quantity: 10,
    available: true,
  },
  S: {
    quantity: 10,
    available: true,
  },
  M: {
    quantity: 10,
    available: true,
  },
  L: {
    quantity: 10,
    available: true,
  },
  XL: {
    quantity: 10,
    available: true,
  },
  XXL: {
    quantity: 10,
    available: true,
  },
  XXXL: {
    quantity: 10,
    available: false,
  },
};
