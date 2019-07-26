import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.queryRecord("word", { word: params.word });
  }
});
