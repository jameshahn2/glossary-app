/* eslint-disable */

import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { sort } from "@ember/object/computed";

export default Route.extend({
  model(params) {
    return RSVP.hash({
       terms: this.store.query("term", { disciplines: params.disciplines }),
       disciplines: params.disciplines
    })
  }
});
