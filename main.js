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

const avgMonth = (u, g) => {
  let res = 0;
  for(let i = 0 ; i < u.length; i++){
    for(let k = 0; k < g.length; k++){
      if(u[i].subscription == g[k].name){
        res += g[k].price;
        break;
      }
    }
  }
  return res;
}

const avgMonthPerUser = (u,g,avgM) => {
  return avgM(u,g)/u.length;
}

console.log(avgMonth(users,groups));
console.log(avgMonthPerUser(users,groups,avgMonth));