import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  // this will return a list structured like:
//
//  [
//    {letter: "a", terms: [] },
//    { letter: "b", terms: ["banana", "byte"] },
//    ... and so on
//  ]
letterGroups: computed("terms.[]", function() {
  let groups = [];

  // "a" is ascii code 97. "z" is 122.
  for (let letterIndex = 97; letterIndex < 123; letterIndex++) {
    let letter = String.fromCharCode(letterIndex);
    const match = letter.toLowerCase();
    groups.push({
      letter,
      terms: this.terms.filter(t => t.term.toLowerCase()[0] === match)
    });
  }
  return groups;
})
});
