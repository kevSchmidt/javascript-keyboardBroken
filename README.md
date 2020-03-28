 - Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
 The function looks like: findBrokenKeys(correct phrase, what you actually typed)
 **Notes**
 1. Broken keys should be ordered by when they first appear in the sentence.
 2. Only one broken key per letter should be listed.
 3. Letters will all be in lower case.
# Third Solution
#### We create an array for our result.
#### We create a new set and split the correct phrase letter by letter.
#### We filter letters from the correct phrase and compare them with the typed one.
## Filter():
![](/img/filter1.png)
![](/img/filter2.png)
