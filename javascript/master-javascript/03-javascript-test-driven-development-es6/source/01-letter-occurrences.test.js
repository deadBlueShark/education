import { expect } from "chai";
import { letterOccurrences } from "./01-letter-occurrences";

describe("letterOccurrences - basic functionality", () => {
  it("returns an empty object when passed an empty string", () => {
    expect(letterOccurrences("")).to.deep.equal({});
  })

  it("returns a valid object for a word with only one of each letter", () => {
    const expected = {"c": 1, "a": 1, "t": 1};
    expect(letterOccurrences("cat")).to.deep.equal(expected);
  })

  it("returns a valid object for a word with one letter occurs twice", () => {
    const expected = {"h": 1, "e": 1, "l": 2, "o": 1};
    expect(letterOccurrences("hello")).to.deep.equal(expected);
  })

  it("returns a valid object for a word with many letters occur many times", () => {
    const expected = {"m": 1, "i": 4, "s": 4, "p": 2};
    expect(letterOccurrences("mississippi")).to.deep.equal(expected);
  })

  it("returns a valid object for a word ignore spaces", () => {
    const expected = {"m": 1, "i": 4, "s": 4, "p": 2};
    expect(letterOccurrences("mi  ssissi ppi")).to.deep.equal(expected);
  })

  it("returns a valid object for a word ignore case", () => {
    const expected = {"m": 1, "i": 4, "s": 4, "p": 2};
    expect(letterOccurrences("miSSissIPpi")).to.deep.equal(expected);
  })
})
