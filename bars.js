!function() {
	var bars = {
    	version: "0.0.1",
    	author: "Chris Carty"
	};

	var svg,
		data,
		height = 500,
		width = 400;

	//Initialize the SVG
	bars.initialize = function(div){

		svg = d3.select(div).append("svg")
					.attr("height", 500)
					.attr("width",400);

		return bars
	}


	//Render the bar chart
	bars.barChart = function(){

		bars.initialize("body");

		//bar chart code goes here
		svg.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("height", function(d){
				return d;
			})
			.attr("width", function(d){
				return 5;
			})
	};


	bars.lineChart = function(){

		//line chart code goes here
	}

	bars.setData = function(dataset){
		if (!arguments){
			return data;
		} else {
			data = dataset;
		}

		return bars;
	}
  	//make objects callable
    if (typeof define === "function" && define.amd) define(bars); else if (typeof module === "object" && module.exports) module.exports = bars;
  this.bars = bars;
}();