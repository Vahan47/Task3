let word1 = prompt("Enter word with min length of 5 symbols");
var result = 0;
while (word1.length < 5) {
    word1 = prompt("Try Again with word by min 5 symbols");
    
}

switch (word1.charAt(0)) {
  case "a":
  case "e":
  case "u":
  case "i":
  case "o":
    result += 4;
    break;
  case "z":
    result += 5;
    break;
  default:
    result -= 1;
}
switch (word1.charAt(1)) {
  case "a":
  case "e":
  case "u":
  case "i":
  case "o":
    result += 4;
    break;
  case "z":
    result += 5;
    break;
  default:
    result -= 1;
}
switch (word1.charAt(2)) {
  case "a":
  case "e":
  case "u":
  case "i":
  case "o":
    result += 4;
    break;
  case "z":
    result += 5;
    break;
  default:
    result -= 1;
}
alert("Your result is " + result);
