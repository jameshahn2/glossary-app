import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({

  letterGroups: computed("terms.[]", function() {
      let groups = [];

      // "a" is ascii code 97. "z" is 122.
      for (let letterIndex = 97; letterIndex < 123; letterIndex++) {
          const letter = String.fromCharCode(letterIndex);
          const match = letter.toLowerCase();

          const matchedTerms = this.terms.filter(t => t.term.toLowerCase()[0] === match);

          if (matchedTerms.length > 0) {
              groups.push({
                  letter,
                  terms: matchedTerms
              });
          }
      }

      return groups;
  })
});
