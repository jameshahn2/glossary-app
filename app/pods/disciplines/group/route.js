/* eslint-disable */

import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    console.log(params)
    return RSVP.hash({
    group: this.store.query('term', { group: params.group }),
    title: this.store.query('term', { title: params.title }),
  })
}
});
