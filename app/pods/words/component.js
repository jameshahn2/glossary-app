import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  constraints: computed(function() {
    return [
      {
        to: "scrollParent",
        attachment: "together",
        pin: true
      }
    ];
  })
});
