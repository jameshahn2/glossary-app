/* eslint-disable */

import makeFunctionalModifier from "ember-functional-modifiers";

function addTooltip(tooltips, element, [ text ]) {
  let tip = { element, text };

  element.addEventListener("mouseenter", () => {
    tooltips.tips.addObject(tip);
  });

  element.addEventListener("mouseleave", () => {
    tooltips.tips.removeObject(tip);
  });
}

export default makeFunctionalModifier(
  { services: ["tooltips"] },
  addTooltip
);
