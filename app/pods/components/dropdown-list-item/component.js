import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  mouseEnter() {
    this.setActiveItems(this);
  },

  mouseLeave() {
    this.clearActiveItems();
  },

  isActive: computed("activeItems.[]", function() {
    return this.activeItems.objectAt(0) === this;
  })
});
