// Write a function which takes in a string and returns counts of each character in the string.

// charCount('aaaa'); // { a:4}
// charCount('hello'); // { h:1, e:1, l2:, o:1}

// charCount('my phone number is 182763');
// charCount('Hello hi')

function charCount (str) {
  // make object to return at end
  let result = {}
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      // if the char is number/letter AND is a key in object, add one to counts
      if (result[char] > 0) {
        result[char]++
        // if the char is number/letter AND is not in object, add it to object and set value to 1
      } else {
        result[char] = 1
      }
    // if the char is something else (space, period, etc.) don't do anything
    }
  }
  // return object at end
  return result
}

charCount('aaaa')

function charCount2 (str) {
  const obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

function isAlphaNumeric (char) {
  let code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false
  }
  return true
}

charCount2('my phone number is 182763')
