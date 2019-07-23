import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";
import { isEmpty } from "@ember/utils";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("activeItems", []);
  },

  setActiveItems(...path) {
    this.updateActiveItems.perform(path);
  },

  clearActiveItems() {
    this.updateActiveItems.perform([]);
  },

  updateActiveItems: task(function*(path) {
    if (isEmpty(path)) {
      yield timeout(500);
    }

    this.set("activeItems", path);
  }).restartable()
});
