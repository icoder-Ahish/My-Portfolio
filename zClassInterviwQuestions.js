function checkPalindrom(str) {
  let combineString = str.replace(/[^a-zA-z0-9]/g, "");
  console.log(combineString);

  let rev = combineString.split("").reverse().join("");

  console.log(rev);

  if (combineString === rev) {
    return true
  }else{
    return false
  }
}

let result = checkPalindrom("ababa");

console.log(result);