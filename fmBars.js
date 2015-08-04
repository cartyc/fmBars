!function() {
	var fmBars = {
    	version: "0.0.1",
    	author: "Chris Carty"
	};

	//set global vars and defaults if any
	var svg,
		data,
		color = d3.scale.category20c(),
		xScale, y,
		height = 500,
		width = 400;

	//Initialize the SVG
	fmBars.initialize = function(div){

		svg = d3.select(div).append("svg")
					.attr("height", height)
					.attr("width", width);

		return fmBars;
	}


	//Render a line chart
	fmBars.lineChart = function(){

		//line chart code goes here
		return fmBars;
	}

	//X Scale
	fmBars.xScale = function(scale){
		if(!arguments){
			return xScale;
		} else{
			xScale = scale;
		}

		return fmBars;
	}

	//Y Scale Accessor
	fmBars.yScale = function(scale){
		if(!arguments){
			return yScale;
		} else {
			yScale = scale;
		}

		return fmBars;
	}

	//Height Accessor
	fmBars.height = function(newHeight){
		if(!arguments){
			return height;
		} else {
			height = newHeight;
		}

		return fmBars;
	}

	//Width Accessor
	fmBars.width = function(newWidth){
		if(!arguments){
			return width;
		} else {
			console.log(data);
			width = newWidth;
		}

		return fmBars;
	}

	//Set the data
	fmBars.setData = function(dataset){
		if (!arguments){
			return data;
		} else {
			data = dataset;
		}

		return fmBars;
	}


	//Render the bar chart
	fmBars.barChart = function(selector){

		//initialze the svg element in the desired tag
		//must preceed this code in the html
		fmBars.initialize(selector);

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
				return yScale(d);
			})
			.attr("width", function(d){
				return xScale.rangeBand();
			})
			.attr("fill", function(d){
				return color(d);
			})
;

		return fmBars;
	};

  	//make objects callable
    if (typeof define === "function" && define.amd) define(fmBars); else if (typeof module === "object" && module.exports) module.exports = fmBars;
  this.fmBars = fmBars;
}();