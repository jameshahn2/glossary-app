import DS from "ember-data";

export default DS.Model.extend({
  term: DS.attr("string"),
  letter: DS.attr("string"),
  group: DS.attr(),
  definitions: DS.attr()
});
