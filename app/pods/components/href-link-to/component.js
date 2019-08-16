import Component from '@ember/component';
import $ from "jquery";
import { isNone } from "@ember/utils";

export default Component.extend({
  _getNormalisedRootUrl: function(router) {
  var rootURL = router.rootURL;
  if(rootURL.charAt(rootURL.length - 1) !== '/') {
    rootURL = rootURL + '/';
  }
  return rootURL;
},

didInsertElement() {
  var _this = this;
  var router = this.container.lookup("router:main");

  $().ready(function (){
    $(".received_message, .my_message").on('click', 'a', function(e) {
      var $target = $(e.currentTarget);
      var handleClick = (e.which === 1 && !e.ctrlKey && !e.metaKey);

      if(handleClick && !$target.hasClass('ember-view') && isNone($target.attr('data-ember-action'))) {

        var rootURL = _this._getNormalisedRootUrl(router);
        var url = $target.attr('href');

        if(url && url.indexOf(rootURL) === 0) {
          url = url.substr(rootURL.length - 1);

          if(router.router.recognizer.recognize(url)) {
            router.handleURL(url);
            router.router.updateURL(url);
            return false;
          }
        }
      }
      return true;
    });
  });
}
});
