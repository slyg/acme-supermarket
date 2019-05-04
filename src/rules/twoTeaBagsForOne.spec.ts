import twoTeaBagsForOne from "./twoTeaBagsForOne";

const lookup: Map<Basket.Code, Basket.Item> = new Map([
  ["FR1", { code: "FR1", price: 20 }],
  ["DOH", { code: "DOH", price: 20 }]
]);

describe("The twoTeaBagsForOne rule", () => {
  it("should sum up the bargains for tea pairs", () => {
    const data = [
      { code: "@@init" },
      { code: "FR1", price: 20 },
      { code: "FR1", price: 20 },
      { code: "DOH", price: 20 },
      { code: "FR1", price: 20 },
      { code: "DOH", price: 20 }
    ];
    const reducer = twoTeaBagsForOne(lookup);
    expect(data.reduce(reducer, {})).toMatchObject({ amount: -20 });
  });
});
