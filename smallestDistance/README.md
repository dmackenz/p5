# Smallest Distance
##### Dylan MacKenzie

This sketch finds the smallest path between all randomly placed points.

Vary the amount of points by changing the n variable in sketch.js.

algorithm:
  -  create array holding digits 0 - (length-1)
  -  increment array by 1 at (length-1) index
  -  at each index, if the value is greater than (length-1) increment index-1
  -  when array contains only unique elements, calculate path distance and print
  -  repeat until all elements in array == (length-1)

Algorithm could be improved by only printing upon completion to reduce IO cost.
This is a brute force algorithm that checks every possibility.
