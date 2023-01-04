// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//1 - Multiples of 3 or 5
function solution(number){
  //if 0 or less edge case -> return 0
  if(number <= 0){
    return 0
  //else 
  }else{
    //make a sum variable
    let sum = 0
    //loop counting down from number -1
      for(let num = number-1 ; num > 0 ; num--)
      //if the number is a multiple of 3 or 5
        if(num%3==0 || num%5==0){
        //add it to the sum
          sum += num
        }
    //return the accumulated sum
  return sum
  }
}

//2 - Who likes it?
function likes(names) {
  //if none ->  "no one likes this"
  //else if 1 -> "${1} likes this"
  //else if 2 -> "${1} and ${2} like this"
  //else if 3 -> "${1}, ${2} and ${3} like this"
  //else -> "${1}, ${2} and ${names.length -2} others like this"

  if(names.length == 0){
    return 'no one likes this'
  }else if(names.length == 1){
    return `${names[0]} likes this`
  }else if(names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else{
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
}

//3 - Find the unique number
function findUniq(arr) {
  //if the last index of the first value is 0
    // return arr[0]
  //else
    // filter out the array of values == arr[0]
    //return arr[0]
  
  return arr.lastIndexOf(arr[0]) == 0 ? arr[0] : arr.filter( ele => ele !== arr[0])[0]
}

//4 - Find the Parity Outlier
function findOutlier(arr){
  //if the array is even at places 1 & 2, or 2 & 3, or 1 & 3 - even except for 1 num
    //return arr.find the number that is odd
  //else - odd except for 1 num
    //return arr.find the number that is even
  
  if(arr[0]%2==0 && arr[1]%2==0 || arr[1]%2==0 && arr[2]%2==0 || arr[0]%2==0 && arr[2]%2==0){
    return arr.find( num => num%2 != 0)
  }else{
    return arr.find( num => num%2 == 0)
  }
}

//5 - Counting Duplicates
function duplicateCount(text){
  const obj = {}
  text = text.toLowerCase()
  
  //make an object containing the letters corresponding to the occurances
  for(let letter of text){
    if(letter in obj){
      obj[letter]++
    }else{
      obj[letter] = 0
    }
  }
  
  //filter out the ones with no occurances
  Object.keys(obj).forEach(key => {
    if(!obj[key]) delete obj[key];
  });

  //return the length of the objects.keys(obj)
  return Object.keys(obj).length 
}

//6 - Moving Zeroes To The End
function moveZeros(arr) {
  //return the arr with no zeros in it plus (.concat) an array with all the zeros if ther were any
  return arr.filter(ele => ele !== 0).concat(arr.filter( ele => ele === 0))
}

//7 - Simple Pig Latin
function pigIt(str){
  //replace:
  //the first letter/digit of a word boundary + the rest of the it until a word boundary
  //with:
  //the rest of it until a word boundary + the first letter/digit of a word boundary + ay
  return str.replace(/\b([\w|\d])([\w|\d]*)/g, '$2$1ay')
}