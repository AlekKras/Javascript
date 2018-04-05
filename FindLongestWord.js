/*Find the longest word's length in a string. Return it */
function findLongestWord(str) {
var elements = str.split(" ");  //we use .split() to turn string into an array
  var longestWord = 0;  
  for (var i=0; i<elements.length; i++){
    if (elements[i].length>longestWord){
      longestWord = elements[i].length;
    }
  }
  return longestWord;
}
findLongestWord("May the force be with you")  //return 5
