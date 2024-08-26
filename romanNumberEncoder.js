function romanNumberEncoder(number) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumber = '';
  for (let key in romanNumerals) {
    while (number >= romanNumerals[key]) {
      romanNumber += key;
      number -= romanNumerals[key];
    }
  }
  return romanNumber;
}
console.log(romanNumberEncoder(3347));
