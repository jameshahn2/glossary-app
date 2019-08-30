export default function() {
  this.namespace = "api";
  this.get("/terms", function({ terms }, { queryParams }) {
    let { term, letter } = queryParams;
    let results = terms.all();
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    return results;
  });
  this.get("/disciplines", function({ terms }, { queryParams }) {
    let { disciplines } = queryParams;
    let results = terms.all();
    if (disciplines) {
      const match = disciplines.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    return results;
  });
this.get("/terms/:id");
}
