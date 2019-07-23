/* eslint-disable no-alert, no-console */

import Component from "@ember/component";

export default Component.extend({
  selectedOption: null,
  actions: {
    setSelection: function(selected) {
      this.set("selectedOption", selected);
      console.log(this.get("selectedOption"));
    },
    submit: function() {
      // code to save or sendAction
      // e.g. let selectedOption = this.get('selectedOption')
      // this.sendAction('submit', selectedOption)
    }
  }
});
