import Component from "@ember/component";
import { computed } from "@ember/object";
import Table from "ember-light-table";

export default Component.extend({
  columns: computed(function() {
    return [
      {
        label: "Word",
        valuePath: "word",
        sortable: false
      }
    ];
  }),

  table: computed("model", function() {
    return new Table(this.get("columns"), this.get("model"));
  })
});
