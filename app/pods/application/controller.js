import Controller from "@ember/controller";
import { task, isBlank, timeout } from "ember-concurrency";
import $ from "jquery";

const DEBOUNCE_MS = 250;

export default Controller.extend({
  searchRepo: task(function * (term) {
  if (isBlank(term)) { return []; }

  yield timeout(DEBOUNCE_MS);

  let url = `/api?q=${term}`;

  let json = yield this.get("getJSON").perform(url);
  return json.items.slice(0, 10);
}).restartable(),

getJSON: task(function * (url) {
  let xhr;
  try {
    xhr = $.getJSON(url);
    let result = yield xhr.promise();
    return result;

  } finally {
    xhr.abort();
  }
}),
});
