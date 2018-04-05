/*we need to check whether a given string a palindrome or not. Return true if it is, false if it isn't*/

function palindrome(s) {
  
  return s.replace(/[\W_]/g, '').toLowerCase() ===  /*we use regular expressions to withdraw any symbols we don't count*/
         s.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
}
palindrome("qwer rewq"); /*return true*/
