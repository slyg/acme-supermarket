const initialAcc = {
  amount: 0
};

/*
 * addAll sums all amounts in the basket. Might be the
 * minimum rule to implement for a cart :)
 */

const addAll = (): Basket.Rule => (acc, item): Basket.RuleResult => {
  const { code } = item;

  switch (code) {
    case "@@init":
      return initialAcc;

    default:
      return {
        ...acc,
        amount: acc.amount + item.price
      };
  }
};

export default addAll;
