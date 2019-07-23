import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.get('/words/:word', function ({ words }, request) {
      return words.findBy({ word: request.params.word });
    });
}
});
