# ACME Supermarket

Create a solution for the ACME Supermarket problem.

## Description of the problem

ACME's quest for global domination has prompted us to open a supermarket – we sell only three products:

    Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

The interface to our basket looks like this (shown in JavaScript):

    var basket = new Basket(pricingRules)
    basket.add(item)
    basket.add(item)
    var price = basket.total()

Implement a basket system that fulfills these requirements in JavaScript.

Test Data:

    Basket: FR1, SR1, FR1, CF1
    Total price expected: £19.34

    Basket: FR1, FR1
    Total price expected: £3.11

    Basket: SR1, SR1, FR1, SR1
    Total price expected: £16.61

## Comments about the solution

### Typescript

I chose to use typescript as it is fairly used now and helps shape much better codebases. And as a side effect it provides IDE documentation, should this class be used in a real project... just kidding :)

### Basket class

The `Basket` class is rather simple and relies on the pricing computation rules to return the total price. I chose to extract all computation out of the class (event the basic sum), as it is simply an api and may not be expected to do more than being a naive interface.

Also, the computation of the total price is performed only when the `total()` method is called. It mimics a sort of lazy approach, even though in this case it doesn't really make a difference.

### Pricing rules

We discussed a lot about redux during the phone call, so I thought it would be consistant to use a functional approach _a la_ redux.

So all these rules look like redux reducers on purpose: each of them computes a part of the total amount, which may be a negative number in the case of a discount.

The `Basket` class reduces these amounts to a single one.

To a certain extent, this structure may ease the addition of new pricing rules.

### Tests

Pricing rules are unit tested as well as the `Basket` class.

You'll find a `bdd.spec.ts` file containing the tests corresponding to the problem description.

### Running the code

By convention, you may install the dependencies and run the tests as following:

```bash
$ npm i
$ npm test -- --verbose # I'm sure you want to see the tests descriptions 👀
```

### Other consideration

JS may not be the best suited language to compute numbers: I'd consider using a library like `bignumber.js`, or even delegating the computation to a server.
