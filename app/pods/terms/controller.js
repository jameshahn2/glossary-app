import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  glossaryData: service(),
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty("isShowingModal");
    }
  }
});
