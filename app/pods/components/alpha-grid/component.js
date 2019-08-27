import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  rows: computed('terms.[]', function() {
    let terms = this.terms;
    let columns = Math.floor(window.innerWidth / 100);
    let itemsPerColumn = Math.ceil(terms.length / columns);
    let rows = [];
    for (let rowNumber = 0; rowNumber < itemsPerColumn; rowNumber++) {
      let row = [];
      for (let i = rowNumber; i < terms.length; i+= itemsPerColumn) {
        row.push(terms.objectAt(i));
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
