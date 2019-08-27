/* eslint-disable */

export default function() {
  this.namespace = "api";
  this.get("/term", function({ terms }, { queryParams }) {
    let { term, letter } = queryParams;
    let results = terms.all();
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    return results;
  });
  this.get("/terms", function({ terms }, { queryParams }) {
    let { term, letter } = queryParams;
    let results = terms.all();
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    return results;
  });
  this.get("/disciplines", function({ terms }, { queryParams }) {
    let { term, disciplines, group, title } = queryParams;
    let results = terms.all();
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    if (disciplines) {
      const match = disciplines.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (group) {
      const match = group.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (title) {
      const match = disciplines.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    return results;
  });
this.get("/terms/:id", "term");
}
