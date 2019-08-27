/* eslint-disable */

import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params)
    return this.store.query('term', { letter: params.letter });
  },
});
