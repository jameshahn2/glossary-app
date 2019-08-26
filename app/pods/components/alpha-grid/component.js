import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  rows: computed('names.[]', function() {
    let names = this.names;
    let columns = Math.floor(window.innerWidth / 100);
    let itemsPerColumn = Math.ceil(names.length / columns);

    let rows = [];
    for (let rowNumber = 0; rowNumber < itemsPerColumn; rowNumber++) {
      let row = [];
      for (let i = rowNumber; i < names.length; i+= itemsPerColumn) {
        row.push(names[i]);
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
