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

function findBrokenKeys(correctPhrase, typedPhrase) {
  // we want first to return an array
  // ...new Set(): we create a new Set (has only UNIQUE values)
  // we split the correct phrase letter by letter
  // we filter letters from the correct phrase and compare them with the typed phrase:
  // example: let difference = new Set([...set1].filter(x => !set2.has(x)))
  return [
    ...new Set(
      correctPhrase.split("").filter((a, index) => a !== typedPhrase[index])
    )
  ];
}
// **links to MDN resources**
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
