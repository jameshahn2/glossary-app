import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  disciplines: computed('model.{discipline.group}', function() {
     return this.get('model.discipline') + ' ' + this.get('model.group');
   })
 });
