function numberToWords(number) {
  // Your code here
  var ones = {0:"nol", 1:"satu", 2:"dua", 3:"tiga", 4:"empat", 5:"lima", 6:"enam",
  7:"tujuh", 8:"delapan", 9:"sembilan"};
  var ten = {10:"sepuluh", 11:"sebelas", 12:"dua belas", 13: "tiga belas",
  14:"empat belas", 15:"lima belas", 16:"enam belas", 17:"tujuh belas",
  18:"delapan belas", 19:"sembilan belas"}
  var suffix = {1:"puluh", 2:"ratus"};
  var thousandsAdd = {1:"ribu", 2:"juta", 3:"milyar", 4:"triliun"};

  var strNum = String(number);
  var strNumLen = strNum.length;
  var converted = [];

  var convertSmaller = (number, converted) => {
    // console.log("goes to the smaller one!");
    var strNum = String(number);
    var strNumLen = strNum.length;
    if (strNumLen < 2) {
      converted.push(ones[number]);
    } else {
      if (strNumLen > 2) {
        if (strNum[0] === "1") {
          converted.push("seratus");
        } else if (Number(strNum[0]) !== 0) {
          converted.push(ones[Number(strNum[0])]);
          converted.push(suffix[2]);
        }
        if (strNum[1] === "1") {
          converted.push(ten[number%100]);
        } else if (Number(strNum[1]) !== 0){
          converted.push(ones[Number(strNum[1])]);
          converted.push(suffix[1]);
        }
        if (Number(strNum[strNumLen-1]) !== 0) {
          converted.push(ones[Number(strNum[strNumLen-1])]);
        }
      } else {
        if (strNum[0] === "1") {
          converted.push(ten[number]);
        } else {
          converted.push(ones[Number(strNum[0])]);
          converted.push(suffix[1]);
          converted.push(ones[Number(strNum[strNumLen-1])])
        }
      }
    }
    // console.log(converted);
    return converted;
  }

  // return convertSmaller(number, converted);

  var converting = (number, converted) => {
    var strNum = String(number);
    var strNumLen = strNum.length;
    // console.log("strNumLen: " + strNumLen);
    if (strNumLen < 4) {
      convertSmaller(number, converted);
      return converted;
    } else {
      var thousandsBlock = Math.floor((strNumLen-1)/3);
      // console.log("thousandsBlock: " + thousandsBlock);
      var notInThBlock = "";
      for (var i = 0; i < strNumLen-(thousandsBlock*3); i++) {
        notInThBlock += strNum[i];
      }
      // console.log("notInThBlock: " + notInThBlock);
      convertSmaller(Number(notInThBlock), converted);
      converted.push(thousandsAdd[thousandsBlock]);
      // console.log("number: " + number);
      var divider = ((Math.pow(1000,thousandsBlock)*notInThBlock));
      // console.log("devider: " + divider);
      var newNumber = number%divider;
      // console.log("newNumber: " + newNumber);
      return converting(newNumber, converted);
      }
    }

  // console.log("Number: " + number);
  return (converting(number, converted)).join(" ");

}

// Driver code
console.log(numberToWords(47308650));
// console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
