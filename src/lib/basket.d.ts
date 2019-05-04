declare class Basket {
  constructor(pricingRules: Basket.Rule[]);

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

  export interface RuleResult {
    amount: Price;
    [key: string]: any;
  }

  export interface Rule {
    (r: RuleResult, i: Item): RuleResult;
  }
}
