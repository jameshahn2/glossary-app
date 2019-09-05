/* Controls the look ahead search visible in application routes. */

import Controller from "@ember/controller";
import { task, timeout } from "ember-concurrency";
import $ from "jquery";
import { isBlank } from "@ember/utils";

const DEBOUNCE_MS = 250;

export default Controller.extend({
  searchGlossary: task(function * (term) {
  if (isBlank(term)) { return []; }

  yield timeout(DEBOUNCE_MS);

  return yield this.store.query("term", { term });
}).restartable(),

getJSON: task(function * (url) {
  let xhr;
  try {
    xhr = $.getJSON(url);
    let result = yield xhr.promise;
    return result;

  } finally {
    xhr.abort();
  }
})
});
