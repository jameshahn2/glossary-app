import DS from "ember-data";

export default DS.Model.extend({
  term: DS.attr("string"),
  letter: DS.attr("string"),
  group: DS.hasMany("term", { inverse: "title"}),
  title: DS.belongsTo("term", { inverse: "group" }),
  definitions: DS.attr()
});
