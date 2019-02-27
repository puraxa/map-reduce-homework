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

let avgMonthReduce = (acc, val) => {
  for(let i = 0; i < users.length; i++){
    if(val.name == users[i].subscription){
      acc += val.price;
    }
  }
  return acc;
} 

let avgMonth = groups.reduce(avgMonthReduce,0);

console.log(avgMonth);