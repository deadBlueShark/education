exports.letterOccurrences = (string) => {
  if ((typeof string) != 'string') return;

  string = string.replace(/ /g, '').toLowerCase();
  let result = {};
  for (let i = 0, len = string.length; i < len; i++) {
    let char = string.charAt(i);
    result[char] = result[char] ? (result[char] + 1) : 1;
  }
  return result;
}

// let letters = string.split('');
// letters.forEach(letter => {})
