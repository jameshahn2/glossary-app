import Model from "ember-data/model";
import DS from "ember-data";

export default Model.extend({
  url: DS.attr("string"),
  word: DS.attr("string"),
  letter: DS.attr("string"),
  definitions: DS.attr("string")
});
