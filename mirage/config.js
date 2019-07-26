export default function() {
  this.namespace = "/api";

this.get('/words', function({ words }, { queryParams }) {
  let { word } = queryParams;
  if (!word) {
    return words.all();
  } else {
    word = word.toLowerCase();
    return words.findBy({ word });
  }
});
}
