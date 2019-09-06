import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  selectedOption: null,
 actions: {
  setSelection: function(selected) {
     this.set("selectedOption", selected)
   },
  submit() {
    this.get("router").transitionTo("disciplines", this.get(`selectedOption`));
  }
 }
});
