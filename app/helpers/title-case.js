import Helper from '@ember/component/helper';

export default Helper.extend({
  compute: function([ title ]) {
    return title.replace('_', ' ')
    .split(' ')
.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
.join(' ');
  },
  computed: function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
});
