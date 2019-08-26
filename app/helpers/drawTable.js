import { helper } from "@ember/component/helper";
import $ from "jquery";

export function drawTable(){
  var array = array
  var windowSize = $(window).width();
  var maxWidth = 50;
  var maxColumn = 2;

  if (windowSize < 400) {
    maxWidth = 33;
    maxColumn = 3;
    }
  if (windowSize < 800) {
    maxWidth = 25;
    maxColumn = 4;
  }

  var maxItemInColumn = Math.ceil(array.length/maxColumn);

  var result = "<div style='width:100%;'>";
  result += "<ul style='float:left;'>";

  for (var j = 0; j < array.length; j++) {
    result += "<li>" + array[j] + "</li>";

    if ((j + 1) % maxItemInColumn === 0) {
      result += "</ul><ul style='float:left;'>";
    }
  }

  result += "</ul>";
  result += "</div>";

  var d1 = document.getElementById('grids');
  d1.insertAdjacentHTML('afterend', result);

}

drawTable();
$( window ).resize(function() {
    drawTable()
});

export default helper(drawTable);
