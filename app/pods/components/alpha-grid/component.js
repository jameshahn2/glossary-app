/* eslint-disable */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  rows: computed('terms.[]', function() {
    let params = this.router.currentRoute.params
    let terms = this.terms;
    console.log(this.terms)
    let columns = Math.floor(window.innerWidth / 100);
    let itemsPerColumn = Math.ceil(terms.length / columns);

    let rows = [];
    for (let rowNumber = 0; rowNumber < itemsPerColumn; rowNumber++) {
      let row = [];
      for (let i = rowNumber; i < terms.length; i+= itemsPerColumn) {
        row.push(terms[i]);
      }
      rows.push(row);
    }
    return rows;
  }),
  handleResize() {
    this.notifyPropertyChange('rows');
  },
  didInsertElement() {
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
  },
  willDestroyElement() {
    window.removeEventListener('resize', this.handleResize);
  }
});
