import { letterOccurrences } from "./01-letter-occurrences";
import { isEqual } from 'lodash';

exports.isAnagram = (string1, string2) => {
  return isEqual(letterOccurrences(string1), letterOccurrences(string2));
}
