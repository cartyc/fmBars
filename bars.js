!function() {
	var bars = {
    	version: "0.0.1",
    	author: "Chris Carty"
	};

	//set global vars and defaults if any
	var svg,
		data,
		xScale, y,
		height = 500,
		width = 400;

	//Initialize the SVG
	bars.initialize = function(div){

		svg = d3.select(div).append("svg")
					.attr("height", height)
					.attr("width", width);

		return bars
	}



	bars.lineChart = function(){

		//line chart code goes here
	}

	//X Scale
	bars.xScale = function(scale){
		if(!arguments){
			return xScale;
		} else{
			xScale = scale;
		}

		return bars;
	}

	//Y Scale Accessor
	bars.yScale = function(scale){
		if(!arguments){
			return yScale;
		} else {
			yScale = scale;
		}

		return bars;
	}

	//Height Accessor
	bars.height = function(newHeight){
		if(!arguments){
			return height;
		} else {
			height = newHeight;
		}

		return bars;
	}

	//Width Accessor
	bars.width = function(newWidth){
		if(!arguments){
			return width;
		} else {
			console.log(data);
			width = newWidth;
		}

		return bars;
	}

	//Set the data
	bars.setData = function(dataset){
		if (!arguments){
			return data;
		} else {
			data = dataset;
		}

		return bars;
	}


	//Render the bar chart
	bars.barChart = function(selector){

		//initialze the svg element in the desired tag
		//must preceed this code in the html
		bars.initialize(selector);

		//let render the bars!
		svg.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function(d,i){
				return xScale(i);
			})
			.attr("y", function(d){
				return height - yScale(d);
			})
			.attr("height", function(d){
				return d;
			})
			.attr("width", function(d){
				return xScale.rangeBand();
			})
;
	};

  	//make objects callable
    if (typeof define === "function" && define.amd) define(bars); else if (typeof module === "object" && module.exports) module.exports = bars;
  this.bars = bars;
}();