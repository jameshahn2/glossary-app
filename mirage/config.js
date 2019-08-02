export default function() {
  this.namespace = "/api";

this.get("/terms", function({ terms }, { queryParams }) {
  let { term } = queryParams;
  if (!term) {
    return terms.all();
  } else {
    term = term.toLowerCase();
    return terms.findBy({ term });
  }
});
  this.get("/terms/:id");
}
