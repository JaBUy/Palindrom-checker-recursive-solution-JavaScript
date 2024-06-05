function palindromeChecker(str) {
  //format the string argument by lowering all cases and removing all non alphanumerics
  let formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  //recursive function solution

  //base case -> evaluating for one char or two identical chars, therefore true
  if (formattedStr.length == 1 || (formattedStr.length == 2 && formattedStr[0] == formattedStr[1])) {
    return true;
  //checking for false palindrome when first char != last char in string, therefore false
  } else if (formattedStr[0] != formattedStr[formattedStr.length-1]) {
    return false;
  //recursive case -> return same func with parameter minus first and last char  
  } else {
    return palindromeChecker(formattedStr.slice(1,-1))
  }
  
}
