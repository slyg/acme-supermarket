declare class Basket {
  constructor(pricingRules: any[]);

  add(item: Basket.Item): this;
  total(): Basket.Price;
}

declare namespace Basket {
  export type Code = string;
  export type Price = number;

  export interface Item {
    code: Code;
    price: Price;
  }
}
