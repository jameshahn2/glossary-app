export default function() {
  this.namespace = "api";
this.get("/terms", function({ terms }, { queryParams }) {
  let { term } = queryParams;
  let results = terms.all();
  if (term) {
    const match = term.toLowerCase();
    results = results.filter(t => t.term.toLowerCase().includes( match ));
  }
  return results;
});
this.get("terms/:id");
}
