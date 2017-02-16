var assert = require('chai').assert;

describe('ES2016 Array.prototype.includes', () => {
  it('should include integer', () => {
    // Given
    const array = [1, 2, 3];

    // When
    const result = array.includes(3);

    // Then
    assert.isTrue(result);
  });

  it('should include not a number', () => {
    // Given
    const array = [1, 2, NaN];

    // When
    const result = array.includes(NaN);

    // Then
    assert.isTrue(result);
  });

  it('should include undefined', () => {
    // Given
    const array = [1, , 3];

    // When
    const result = array.includes(undefined);

    // Then
    assert.isTrue(result);
  });

  it('should include string', () => {
    // Given
    const array = ['one', 'two', 'three'];

    // When
    const result = array.includes('three');

    // Then
    assert.isTrue(result);
  });

  it('should include class', () => {
    // Given
    const person = new Person('Gregory', 'House');
    const array = [person];

    // When
    const result = array.includes(person);

    // Then
    assert.isTrue(result);
  });

  it('should not include class', () => {
    // Given
    const person = new Person('Gregory', 'House');
    const array = [person];

    // When
    const result = array.includes(new Person('Gregory', 'House'));

    // Then
    assert.isFalse(result);
  });

  it('should include character', () => {
    // Given
    const name = 'Gregory House';

    // When
    const result = name.includes('House');

    // Then
    assert.isTrue(result);
  });

  it('should not include character', () => {
    // Given
    const name = 'Gregory House';

    // When
    const result = name.includes('Bob');

    // Then
    assert.isFalse(result);
  });

  it('should find value from index the specified index', () => {
    // Given
    const array = [1, 2, 3];
    const fromIndex = 2;

    // When
    const result = array.includes(3, fromIndex);

    // Then
    assert.isTrue(result);
  });

  it('should not find item from the index specified', () => {
    // Given
    const array = [1, 2, 3];
    const fromIdex = 3;

    // When
    const result = array.includes(3, fromIdex);

    // Then
    assert.isFalse(result);
  });

  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
});
