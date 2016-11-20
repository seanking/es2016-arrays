'use strict';

var assert = require('chai').assert;

describe('ES2016 ', () => {
  it('should include integer', () => {
    // When
    const array = [1, 2, 3];

    // Then
    assert.isTrue(array.includes(3));
  });

  it('should include not a number', () => {
    // When
    const array = [1, 2, NaN];

    // Then
    assert.isTrue(array.includes(NaN));
  });

  it('should include undefined', () => {
    // When
    const array = [1, , 3];

    // Then
    assert.isTrue(array.includes(undefined));
  });

  it('should include string', () => {
    // When
    const array = ['one', 'two', 'three'];

    // Then
    assert.isTrue(array.includes('three'));
  });

  it('should include class', () => {
    // Given
    const person = new Person('Gregory', 'House');

    // When
    const array = [person];

    // Then
    assert.isTrue(array.includes(person));
  });

  it('should not include class', () => {
    // Given
    const person = new Person('Gregory', 'House');

    // When
    const array = [person];

    // Then
    assert.isFalse(array.includes(new Person('Gregory', 'House')));
  });

  it('should include character', () => {
    // When
    const name = 'Gregory House';

    // Then
    assert.isTrue(name.includes('House'));
  });

  it('should not include character', () => {
    // When
    const name = 'Gregory House';

    // Then
    assert.isFalse(name.includes('Bob'));
  });

  it('should find value from index', () => {
    // When
    const array = [1, 2, 3];

    // Then
    assert.isTrue(array.includes(3, 2));
  });

  it('should not find value from index', () => {
    // When
    const array = [1, 2, 3];

    // Then
    assert.isFalse(array.includes(3, 3));
  });

  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
});
