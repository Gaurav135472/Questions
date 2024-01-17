function isAnagram(str1, str2) {
  let string1 = str1.trim().toLowerCase();
  let string2 = str2.trim().toLowerCase();
  let stringA = string1.split("");
  let stringB = string2.split("");
  let newWord = [];

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      let index = stringB.indexOf(stringA[i]); // indexof function The indexOf function is used to find the index of the first occurrence of a specified element in an array. In the context of the isAnagram function, the purpose of using indexOf is to check if the current character in stringA is present in stringB.

//      This line searches for the index of the character stringA[i] in the array stringB. If the character is found, indexOf returns the index of the first occurrence of the character in the array. If the character is not found, it returns -1.
      if (index !== -1) {
        newWord.push(stringA[i]); 
        stringB.splice(index, 1);
      } else {
        console.log("false");
        return false;
      }
    }
  } else {
    console.log("false");
    return false;
  }

  console.log(newWord);
  console.log(stringB);

  if (newWord.join("") === stringA.join("")) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
module.exports = isAnagram;
