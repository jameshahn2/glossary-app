import { helper } from "@ember/component/helper";
import { htmlSafe } from "@ember/template";

export function breakLines([str]) {
  let div = document.createElement("div");
  str.split("\n").forEach(str => {
    div.appendChild(document.createTextNode(str));
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
  });
  return htmlSafe(div.innerHTML);
}

export default helper(breakLines);
