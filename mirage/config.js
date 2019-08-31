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
    return results;
  });
this.get("/terms/:id");
}
