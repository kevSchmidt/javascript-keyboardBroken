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
  // we assign our parameters to two distinct array
  let arr1 = [...correctPhrase];
  let arr2 = [...typedPhrase];
  // we create a new Set to have only unique values
  // we map our correct array to compare it with typed one
  // check with a ternary condition: it return the missing letter and false for identic values
  // we use a filter to only keep our boolean result
  return [
    ...new Set(
      arr1.map((x, index) => (x == arr2[index] ? false : x)).filter(Boolean)
    )
  ];
}
// **links to MDN resources**
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
