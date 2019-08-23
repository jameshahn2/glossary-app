import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findAll('term').filter(term => term[0] === params.letter);
}
});
