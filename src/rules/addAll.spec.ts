import addAll from "./addAll";

describe("The addAll rule", () => {
  it("should sum all the amounts", () => {
    const data = [
      { code: "@@init" },
      { code: "DOH", price: 2 },
      { code: "DAH", price: 4 },
      { code: "DIH", price: -2 }
    ];
    const reducer = addAll();
    expect(data.reduce(reducer, {})).toEqual({ amount: 4 });
  });
});
