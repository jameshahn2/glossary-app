/* eslint-disable */

import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({
  // this will return a list structured like:
//
//  [
//    {letter: "a", terms: [] },
//    { letter: "b", terms: ["banana", "byte"] },
//    ... and so on
//  ]

letterBatches: computed(`terms.[]`, function() {

  let batches = [];

  // "a" is ascii code 97. "z" is 122.
  for (let letterIndex = 97; letterIndex < 123; letterIndex++) {
    let letter = String.fromCharCode(letterIndex);
    batches.push({
      letter,
      terms: this.terms.filter(term => term[0].toLowerCase() === letter)
    });
  }
  return batches;
}),
});
