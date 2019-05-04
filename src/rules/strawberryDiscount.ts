const initialAcc = {
  amount: 0,
  numberOfStrawberries: 0
};

const PRODUCT_CODE = "SR1";
const DISCOUNT = -0.5;

/*
 * strawberryBargain applies a discount on the strawberry
 * price when this item's count reaches 3 and more.
 */

const strawberryBargain = (): Basket.Rule => (acc, item): Basket.RuleResult => {
  const { code } = item;

  switch (code) {
    case "@@init":
      return initialAcc;

    case PRODUCT_CODE: {
      const hasReachedThreshold = acc.numberOfStrawberries >= 2;
      const amount = hasReachedThreshold
        ? DISCOUNT * (acc.numberOfStrawberries + 1)
        : acc.amount;

      return {
        ...acc,
        amount,
        numberOfStrawberries: acc.numberOfStrawberries + 1
      };
    }

    default:
      return acc;
  }
};

export default strawberryBargain;
