export default function() {
  this.namespace = "api";
  this.get("/terms", function({ terms }, { queryParams }) {
    let { term, letter, disciplines } = queryParams;
    let results = terms.all();
    if (term) {
      const match = term.toLowerCase();
      results = results.filter(t => t.term.toLowerCase().includes(match));
    }
    if (letter) {
      const match = letter.toLowerCase();
      results = results.filter(t => t.term.toLowerCase()[0] === match);
    }
    if (disciplines) {
      results = results.filter(term => {
      return term.disciplines.some(discipline => discipline.group === disciplines);
      });
    }

    return results.sort(function(a, b) {
      var termA = a.term.toUpperCase(); // ignore upper and lowercase
      var termB = b.term.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {
        return -1;
      }
      if (termA > termB) {
        return 1;
      }

      // terms must be equal
      return 0;
    });
  });
this.get("/terms/:id");
}
