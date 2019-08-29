/* eslint-disable */

export default function() {
  this.namespace = "api";
  this.get("/terms", function({ terms }, { queryParams }) {
    let { term, letter, group } = queryParams;
    let results = terms.all();
    console.log(terms)
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (group) {
      const match = group.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    return results;
  });
this.get("/terms/:id");
}
