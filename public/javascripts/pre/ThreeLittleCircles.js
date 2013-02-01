/**
 File:
    ThreeLittleCircles.js
 Created By:
    Mario Gonzalez - mariogonzalez@gmail.com
 Project:
    Blackrock - Global Allocation Fund
 Abstract:
    Experimenting with d3.js before diving into project
 */
;
(function () {
  GAF.pre = GAF.pre || {};

  GAF.pre.ThreeLittleCircles = function () {
    var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
      14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
      24, 18, 25, 9, 3 ];

    d3.select("#hero-container").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .classed('bar', true)
      .style('background', function (d) {
        return "hsl(" + Math.floor((dataset.indexOf(d) / dataset.length * 360)) + ", 70%, 80%)";
      })
      .style('height', function (d) {
        return d * 5 + "px";
      });
  };

  GAF.pre.ThreeLittleCircles.prototype = {};
})();