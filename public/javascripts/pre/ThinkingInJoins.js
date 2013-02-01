/**
 File:
  ThreeLittleCircles.js
 Created By:
  Mario Gonzalez - Mario.Gonzalez@ogilvy.com
 Project:
  Blackrock - Global Allocation Fund
 Abstract:
  Experimenting with d3.js before diving into project
  http://bost.ocks.org/mike/join/
 */
;
(function () {

  GAF.pre = GAF.pre || {};
  GAF.pre.ThinkingInJoins = function() {
    var that = this;
    this._dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                    14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                    24, 18, 25, 9, 3 ];
    this._width = $("#" + GAF.model.Constants.divContainerId ).width();
    this._height = $("#" + GAF.model.Constants.divContainerId ).height();
    this._padding = 20;
    this._scaleX = d3.scale.linear()
      .domain( d3.extent(this._dataset) )
      .range( [this._padding, this._width-this._padding] );

    this._svg = d3.select("#hero-container")
      .append('svg')
      .attr("width", this._width)
      .attr('height', this._height);

    this._svg.selectAll('circle')
      .data( this._dataset )
        .enter().append('circle')
      .attr('cx', function(d) {
        return that._scaleX(d);
      })
      .attr('cy', this._height/2)
      .attr('r', 4);

    this.updateData();
  };

  GAF.pre.ThinkingInJoins.prototype = {
    updateData: function() {
      var that = this;
      for(var i = 0; i < this._dataset.length; i++) {
        if( Math.random() < 0.5 ) {
          this._dataset[i] = null;
          continue;
        }

        this._dataset[i] = Math.round(Math.random()*30);
      }
      this._dataset = this._dataset.filter(function(element){ return element != null});

      var circles = this._svg.selectAll('circle')
        .data( this._dataset );

      // Add new
      circles.enter().append('circle')
        .attr('r', 4);

      // Set size
      circles
        .attr('cx', function(d) {
          return that._scaleX(d);
        })
        .attr('cy', this._height/2);

      // Remove old
      circles.exit()
        .remove();
    }

  }
})();