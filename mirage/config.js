const convertLinks = function(definition) {

    let cleaned = definition.replace(/<a[^>]* href="([^"]*)"/)
    let emberLinks = cleaned.replace(/\/en\/Terms\//gi, "/terms/")
    return emberLinks
}

export default function() {
  this.namespace = "api";
this.get("/terms", function({ terms }, { queryParams }) {
  let { term } = queryParams;
  let results = terms.all();
  if (term) {
    const match = term.toLowerCase();
    results = results.filter(t => t.term.toLowerCase().includes(match));
  }
  return results.forEach(function(result) {
    result.definition = convertLinks(result.definition)
})
});
  this.get("terms/:id");
}
