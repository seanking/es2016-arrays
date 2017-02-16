var expect = require('chai').expect;

describe('ES2016 Exponentiation Opertator', () => {
  it('should provide the base to the exponent power', () => {
    // When
    const result = 3 ** 2;

    // Then
    expect(result).to.equal(9);
  });

  it('should reassign the variable', () => {
    // Given
    let value = 3;

    // When
    value **= 2;

    // Then
    expect(value).to.equal(9);
  });
});
