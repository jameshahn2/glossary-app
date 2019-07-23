import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),
  glossaryData: service(),

  model() {
  },

  afterModel(model) {
    this.glossaryData.setData(model);
  }
});
