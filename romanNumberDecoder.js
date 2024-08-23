function romanNumberDecoder(str) {
  let result = 0;
  const romansValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < str.length; i++) {
    const currentValue = romansValue[str[i]];
    const nextValue = romansValue[str[i + 1]];
    if (currentValue < nextValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += romansValue[str[i]];
    }
  }
  return result;
}
console.log(romanNumberDecoder('MMMCCCXLVII')); // 3347
