 - Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
 The function looks like: findBrokenKeys(correct phrase, what you actually typed)
 **Notes**
 1. Broken keys should be ordered by when they first appear in the sentence.
 2. Only one broken key per letter should be listed.
 3. Letters will all be in lower case.
# Second Solution
#### We assign first our parameters to two distinct arrays.
#### We create than a new Set to have only unique values.
## Set():
![](img/set1.png)
![](img/set2.png)
## Map():
#### We map our correct array to compare it with typed one and check with a ternary condition.
#### We finaly use a filter to only keep our boolean result.
![](img/map1.png)
![](img/map2.png)
