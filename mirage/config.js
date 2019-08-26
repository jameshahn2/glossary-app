export default function() {
  this.namespace = "api";
  this.get("/disciplines", function({ terms }, { queryParams }) {
    let { groups } = queryParams;
    let results = terms.all();
    if (groups) {
      const match = groups.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    return results;
  });
  this.get("/term", function({ terms }, { queryParams }) {
    let { letter } = queryParams;
    let results = terms.all();
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
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
this.get("/terms/:id");
this.get("/terms/:groups")
}
