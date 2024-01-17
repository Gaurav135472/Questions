function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters along with spaces
  let reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
