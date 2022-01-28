//Date

const date = new Date();
console.log('date', date);

//0 январь - 11 декабрь
const newDate = new Date(2000, 1, 1, 11, 55, 5, 5000 );

console.log('year', newDate.getFullYear())

//День недели 0 воскресенье - 6 суббота
console.log('day', newDate.getDay());

newDate.setHours(10);

//Разница дат

const date1 = new Date(2005, 4, 20);
const date2 = new Date(2005, 4, 10);

//количество мс с Jan 1, 1970
console.log('date1', date1.getTime());

const difference = date2.getTime() - date2.getTime();
console.log('difference', difference / 1000 / 60); //  в минутах

const startTime = Date.now();