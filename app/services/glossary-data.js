import Service from '@ember/service';

export default Service.extend({
  data: null,

  setData(data) {
    this.set('data', data);
  }
});
