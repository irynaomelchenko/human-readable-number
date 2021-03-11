module.exports = function toReadable(number) {
  let resStr = '';
  let arr = number.toString().split('').map(el => +el);
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number <= 20) {
    resStr = numbers[number]
  } else if (number > 20 && number < 100) {
    if (arr[1]===0){
      resStr=`${tens[arr[0]]}`
    } else {
    resStr = `${tens[arr[0]]} ${numbers[arr[1]]}`
    }
  } else if (number !== 0 && number % 100 == 0) {
    resStr = `${numbers[arr[0]]} hundred`
  } else if (number > 100 && number < 1000 && (arr[1] < 2 || arr[1] === 2 && arr[2] === 0)) {
    resStr = `${numbers[arr[0]]} hundred ${numbers[arr[1] * 10 + arr[2]]}`
  } else if (number > 100 && number < 1000 && arr[1] >= 2) {
    if (arr[2]===0) {
      resStr=`${numbers[arr[0]]} hundred ${tens[arr[1]]}`
    } else {
    resStr = `${numbers[arr[0]]} hundred ${tens[arr[1]]} ${numbers[arr[2]]}`
    }
  }

  return resStr;
}
