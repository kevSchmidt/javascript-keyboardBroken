# First Solution
 - Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
 The function looks like: findBrokenKeys(correct phrase, what you actually typed)
 **Notes**
 1. Broken keys should be ordered by when they first appear in the sentence.
 2. Only one broken key per letter should be listed.
 3. Letters will all be in lower case.
#### We create an array for our result. 
## Loop with for():
#### We loop inside the length of the correct phrase to compare it, letter by letter, with the wrong one.
![](./img/for1.png)
![](./img/for2.png)
## Includes:
#### We check with includes if a letter is different in our two phrases, if yes, we push it to our result array.
![](./img/includes1.png)
![](./img/includes2.png)
