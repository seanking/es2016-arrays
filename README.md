#ES2016/ES7

ES2016 is a smaller evolution of EcmaScript than ES2017. This will most likely be the trend going forward, since the a new edition will be published year.

Two new features were introduced with ES2016.
* Array.proptype.includes
* Exponentiation Operator

## Array.proptype.includes

A new method was introduced to Array that determines whether item is within the array. The new method provides to two signatures; one for searching the entire array for an item and another for searching the array starting at a specified index.


The following example inspects the entire array for an item.

````
const array = [1, 2, 3];
array.includes(3);  //true
array.includes(4);  //false
````


The following example inspects the array for an item, but starting at a specified index.

````
const array = [1, 2, 3];
const fromIndex = 2;
array.includes(3, fromIndex);  //true
array.includes(1, fromIndex);  //false
````

## Exponential Operator

The exponentiation operator (**) was introduced as syntactic sugar for Math.pow(base, exponent).

The following is a simple example of calculating the three squared;

````
3 ** 2; // 9
````

It is also possible to update a variable using the exponentation operator.

````
let x = 3;
x **= 2; // x === 9
````

Summary

While the features new in ES2016 aren't as game changing as the features provided by ES2015, it is still reassuring to see the EcmaScript specification being updated on a regular scheduled.

Most major browsers provide support for Array.prototype.includes except for Internet Explorer and few browsers support the new exponential operators. If these feature are important to you developer, try running them through a trans-compoiler like Babel.
