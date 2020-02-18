// - Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
// The function looks like: findBrokenKeys(correct phrase, what you actually typed)
// **Notes**
// 1. Broken keys should be ordered by when they first appear in the sentence.
// 2. Only one broken key per letter should be listed.
// 3. Letters will all be in lower case.
// **Examples**
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

const findBrokenKeys = (correctArg, arg) => {
  // we want the result in an array
  let result = [];
  // we loop inside the length of the correct phrase
  for (let i = 0; i < correctArg.length; i++) {
    // we compare letter by letter the correct phrase and what is actually typed
    if (arg[i] !== correctArg[i]) {
      // we check if a letter is already in our result array
      if (!result.includes(correctArg[i])) {
        // we push this letter if not already present
        result.push(correctArg[i]);
      }
    }
  }
  return result;
};

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
