// Task1:
function getDateFormat(date, separator = '.') {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10 ) {
    month = `0${month}`;
  };
  if (day < 10 ) {
    day = `0${day}`;
  };
  return `${day}${separator}${month}${separator}${year}`;
}

console.log(getDateFormat(new Date()));


// Task2:
function getDaysBeforeBirthday(nextBirthdayDate) {
  const birthdayTime = nextBirthdayDate.getTime();
  const todayTime = new Date().getTime();
  return convertMsToDays(birthdayTime - todayTime);
}

function convertMsToDays(valueInMs) {
  return Math.round(valueInMs / 1000 / 60 / 60 / 24);
}

console.log(getDaysBeforeBirthday(new Date(2022, 0, 30)));

//Task3:
function addDays(date, days = 1) {
  const daysToTimestamp = days * 1000 * 60 * 60 * 24;
  return new Date(date + daysToTimestamp);
}
console.log(addDays(Date.now(), 5));