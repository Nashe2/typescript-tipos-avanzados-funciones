const prices: (number | string )[] = [1,2,3,4,5];
prices.push(1);
prices.push('1');
console.log(prices);

/* Tupla */
const user:[string, number] = ['nicobytes',15];

/* desestructuracion */
const [username, age] = user;
console.log(username, age);
