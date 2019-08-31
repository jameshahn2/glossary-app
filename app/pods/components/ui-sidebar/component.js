/* eslint-disable no-alert, no-console */

import Component from "@ember/component";

export default Component.extend({
  selectedOption: null,
  actions: {
    setSelection: function(selected) {
      this.set("selectedOption", selected);
    },
    click() {
      this.submit();
    }
  }
});
