let groups = [{ name: 'sega',  price: 23,  halfYearDiscountPercentage: 10 },
 { name: 'mega',  price: 69.71,  halfYearDiscountPercentage: 20 },
 { name: 'giga', price: 105.44,  halfYearDiscountPercentage: 25} ];

let users = [
  { name: 'salmin', subscription: 'giga' },
  { name: 'elvir', subscription: 'sega' },
  { name: 'edin', subscription: 'mega' },
  { name: 'almir', subscription: 'sega' },
  { name: 'mersad', subscription: 'giga' },
  { name: 'aladin', subscription: null }
 ];
// average monthly income
let avgMonthReduce = (acc, val) => {
  for(let i = 0; i < users.length; i++){
    if(val.name == users[i].subscription){
      acc += val.price;
    }
  }
  return acc;
} 
// count only users that have subscription
let countActiveUsers = (acc, val) => {
  if(val.subscription != null){
    acc++;
  }
  return acc;
}
// adds halfYearPrice to users
let halfYearPrice = (element) => {
  let newObj = {
    name: element.name,
    subscription: element.subscription,
    halfYearPrice: null,
  };
  for(let i = 0; i < groups.length; i++){
    if(element.subscription == groups[i].name){
      newObj.halfYearPrice=groups[i].price*6-(groups[i].price*6*groups[i].halfYearDiscountPercentage/100);
    }
  }
  return newObj;
}

let avgMonth = groups.reduce(avgMonthReduce,0);
let avgMonthPerUser = avgMonth / users.reduce(countActiveUsers,0);


console.log('Prosjecna mjesecna zarada iznosi ' + avgMonth);
console.log('Prosjecna mjesecna zarada po korisniku iznosi ' + avgMonthPerUser);

users = users.map(halfYearPrice);
console.log(users);