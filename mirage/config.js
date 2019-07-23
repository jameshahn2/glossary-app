export default function() {

  this.namespace = "/api";
      let words = [
    ];

      this.get('/words', function(db, request) {
  if(request.queryParams.word !== undefined) {
    let filteredWords = words.filter(function(i) {
      return i.letter.word.toLowerCase().indexOf(request.queryParams.word.toLowerCase()) !== -1;
    });
    return { data: filteredWords };
  } else {
    return { data: words };
  }
});
  // Find and return the provided rental from our rental list above
  this.get('/words/:word', function (db, request) {
  return { data: words.find((words) => request.params.word === words.word) };
});
}
