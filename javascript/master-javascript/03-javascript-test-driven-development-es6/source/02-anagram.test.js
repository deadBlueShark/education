import { expect } from 'chai';
import { isAnagram } from './02-anagram.js';

describe('isAnagram', () => {
  it('returns true with two empty strings', () => {
    expect(isAnagram('', '')).to.equal(true);
  })

  it('returns false if two words is different length', () => {
    expect(isAnagram('abc', 'd')).to.equal(false);
  })

  it('returns true if two words contain the same letters', () => {
    expect(isAnagram('below', 'elbow')).to.equal(true);
  })

  it('returns true if two words contain the same letters and diffrent spaces', () => {
    expect(isAnagram('be  low', 'elb o w')).to.equal(true);
  })

  it('returns true if two words contain the same letters and different case', () => {
    expect(isAnagram('bElow', 'elboW')).to.equal(true);
  })

  it('returns false if two words contain the same letters in different quantity', () => {
    expect(isAnagram('belowb', 'elbow')).to.equal(false);
  })
})
