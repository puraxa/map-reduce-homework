let groups = [{
    name: 'sega',
    price: 23,
    halfYearDiscountPercentage: 10
  },
  {
    name: 'mega',
    price: 69.71,
    halfYearDiscountPercentage: 20
  },
  {
    name: 'giga',
    price: 105.44,
    halfYearDiscountPercentage: 25
  }
];

let users = [{
    name: 'salmin',
    subscription: 'giga'
  },
  {
    name: 'elvir',
    subscription: 'sega'
  },
  {
    name: 'edin',
    subscription: 'mega'
  },
  {
    name: 'almir',
    subscription: 'sega'
  },
  {
    name: 'mersad',
    subscription: 'giga'
  },
  {
    name: 'aladin',
    subscription: null
  }
];
//transforms groups to key/value pairs
let transformed = groups.reduce((result, group) => {
  result[group.name] = group.price;
  return result;
}, {});

console.log(transformed);

let MonthlyIncome = users.reduce((total, subs) => total += subs.subscription != null ? transformed[subs.subscription] : 0, 0)

console.log(MonthlyIncome);

let avgMonthPerUser = MonthlyIncome / users.reduce((counter, user) => counter += user.subscription != null ? 1 : 0, 0);

console.log(avgMonthPerUser);
// trabsform groups so i can access discount without loops
let transDisc = groups.reduce((acc,element) => {
  acc[element.name] = {
    price: element.price,
    discount: element.halfYearDiscountPercentage,
  };
  return acc;
},{});

console.log(transDisc);
//calculates halfYearPrice
let halfYearPrice = (element) => {
  element.halfYearPrice = element.subscription!=null ? 6*transDisc[element.subscription].price-(6*transDisc[element.subscription].price*(transDisc[element.subscription].discount/100)): null;
  return element;
}

users = users.map(halfYearPrice);

console.log(users);