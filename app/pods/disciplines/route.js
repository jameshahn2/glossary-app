/* eslint-disable */

import Route from "@ember/routing/route";
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    console.log(params)
    return RSVP.hash({
       terms: this.store.query("term", { disciplines: params.disciplines }),
       disciplines: params.disciplines
    });
  }
});
