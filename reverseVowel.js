const reverseVowels = (str) => {
  const vowels = 'aeiouAEIOU';
  const vowelsInString = str
    .split('')
    .filter(char => vowels.includes(char))
    .reverse();

  let resultString = '';
  let vowelIndex = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      resultString += vowelsInString[vowelIndex];
      vowelIndex++;
    } else {
      resultString += char;
    }
  }

  return resultString;
};
console.log(reverseVowels('Tomatoes'));
