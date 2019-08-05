export default function() {
  this.namespace = "api";
this.get("/terms", function({ terms }, { queryParams }) {

  let { term } = queryParams;
  if (term) {
    const match = term.toLowerCase();
    terms = terms.filter(t => t.term.toLowerCase().includes( match ));
  }
  return terms;
});
}
