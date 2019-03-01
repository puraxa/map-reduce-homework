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

let transformed = groups.reduce((result, group) => {
  result[group.name] = group.price;
  return result;
}, {});

console.log(transformed);

let avgMonth = users.reduce((total, subs) => total += subs.subscription != null ? transformed[subs.subscription] : 0, 0)

console.log(avgMonth);

let avgMonthPerUser = avgMonth / users.reduce((counter, user) => counter += user.subscription != null ? 1 : 0, 0);

console.log(avgMonthPerUser);

let transDisc = groups.reduce((acc,element) => {
  acc[element.name] = {};
  acc[element.name]['price'] = element.price;
  acc[element.name]['discount'] = element.halfYearDiscountPercentage;
  return acc;
},{});

console.log(transDisc);

let halfYearPrice = (element) => {
  element.halfYearPrice = element.subscription!=null ? 6*transDisc[element.subscription].price-(6*transDisc[element.subscription].price*(transDisc[element.subscription].discount/100)): null;
  return element;
}

users = users.map(halfYearPrice);

console.log(users);