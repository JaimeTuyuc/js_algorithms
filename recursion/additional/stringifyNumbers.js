/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.
*/

function stringifyNumbers(obj){
  let newObj = {}
  for(let key in obj){
    if(typeof obj[key] === 'number'){
      newObj[key] = obj[key].toString()
    }else if( typeof obj[key] === 'object' && !Array.isArray(obj[key])){
      newObj[key] = stringifyNumbers(obj[key])
    }else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// Time complexity: O(n) - linear time complexity
// Space complexity: O(n) - linear space complexity
// * when manipulating an object you should create a new object and return it
// * you have to assing in the new object the key and the value of the original object