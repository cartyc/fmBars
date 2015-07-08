!function() {
	var bars = {
    	version: "0.0.1"
	};

	var svg,
		height = 500,
		width = 400;

	bars.initialize = function(div){

		svg = d3.select(div).append("svg")
					.attr("height", 500)
					.attr("width",400);

		return bars
	}


	bars.barChart = function(){

		//bar chart code goes here
	};


	bars.lineChart = function(){

		//line chart code goes here
	}

  	//make objects callable
    if (typeof define === "function" && define.amd) define(bars); else if (typeof module === "object" && module.exports) module.exports = bars;
  this.bars = bars;
}();