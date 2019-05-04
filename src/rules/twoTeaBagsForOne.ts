const initialAcc = {
  amount: 0,
  numberOfTeaBags: 0
};

const PRODUCT_CODE = "FR1";

/*
 * twoTeaForOne applies a discount on the tea
 * for each pair of tea bag.
 */

const twoTeaForOne = (
  lookupTable: Map<Basket.Code, Basket.Item>
): Basket.Rule => (acc, item): Basket.RuleResult => {
  const { code } = item;

  switch (code) {
    case "@@init":
      return initialAcc;

    case PRODUCT_CODE: {
      const hasTeaBagPair =
        acc.numberOfTeaBags > 0 && acc.numberOfTeaBags % 2 !== 0;

      return {
        ...acc,
        amount: hasTeaBagPair
          ? acc.amount - lookupTable.get(PRODUCT_CODE).price
          : acc.amount,
        numberOfTeaBags: acc.numberOfTeaBags + 1
      };
    }

    default:
      return acc;
  }
};

export default twoTeaForOne;
