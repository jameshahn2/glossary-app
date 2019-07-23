import DS from "ember-data";

export default DS.Model.extend({
  id: DS.attr("number"),
  word: DS.attr("string"),
  url: DS.attr("string"),
  letter: DS.attr("string"),
  descriptions: DS.attr()
});
