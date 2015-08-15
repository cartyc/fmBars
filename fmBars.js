!function() {
	var fmBars = {
    	version: "0.0.1",
    	author: "Chris Carty"
	};

	//set global vars and defaults if any
	var svg,
		data,
		max,
		color = d3.scale.category20c(),
		xScale, y,
		height,
		width,
		padding = 20,
		margin = 30,
		offset = 20;

	//Initialize the SVG
	fmBars.initialize = function(div){

		console.log(margin)
		svg = d3.select(div).append("svg")
					.attr("height", height)
					.attr("width", width)
					.attr("class", ".chartArea");

		// console.log(svg);
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
			// console.log(newHeight);
			height = newHeight;
		}

		return fmBars;
	}

	//Width Accessor
	fmBars.width = function(newWidth){
		if(!arguments){
			return width;
		} else {
			// console.log(newWidth);
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

fmBars.margin = function(newMargins){
		if(!arguments){

			return margin;
		} else {
			margin = newMargins;
		}

		return fmBars;
	}

fmBars.setMax = function(maxHeight){
		if(!arguments){
			return max;
		} else{
			max = maxHeight;
		}

		return fmBars;
}

	//Render the bar chart
	fmBars.barChart = function(selector){


		//let render the bars!
		svg.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function(d,i){
				return xScale(i);
			})
			.attr("y", function(d){
				// console.log(d.y);
				return yScale(d.y);
			})
			.attr("height", function(d){
				return (height -margin.top - margin.bottom) - yScale(d.y);
			})
			.attr("width", function(d){
				return xScale.rangeBand();
			})
			.attr("fill", function(d){
				return color(d.y);
			});

		var xLabels = [];
		console.log("Mapping");
		for ( var i = 0 ; i < data.length; i++){
				xLabels.push(data[i].x);
				console.log(i);
		}

		console.log(xLabels);
		//x-Axis
		this.renderAxes(d3.scale.ordinal().domain(xLabels).rangeRoundBands([margin.left + margin.right, w], 0.05), "bottom");
		// this.renderAxes(xScale, "bottom");
		//y-Axis
		// this.renderAxes(d3.scale.linear().domain([d3.max(data, function(d){return d.y}), 0]).range([ 0, height -margin.top - margin.bottom ]), "left");
		this.renderAxes(yScale, "left");

		return fmBars;
	};

	///////////////////////////
	//Group Bar Chart

	fmBars.groupedBarChart = function(selector){

		console.log(margin);
		console.log(data);
		// console.log(svg);


		var layer = svg.selectAll(".layer")
			.data(data)
			.enter()
			.append("g")
			.attr("class", "layer")
			.style("fill", function(d, i) { return color(i); });

		var rect = layer.selectAll("rect")
			.data(function(d){
				return d;
			})
			.enter()
			.append("rect")
		    .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / 4 * j; })
			.attr("y", function(d) { return yScale(d.y); })
		    .attr("width", x.rangeBand() / 4)
			.attr("height", function(d) { return (height - margin.top - margin.bottom) - yScale(d.y); })
			.attr("fill", function(d){
				return color(d.y);
			})
			.attr("class", ".rect");

			//Render xAxis
	  	// this.renderAxes(d3.scale.ordinal().domain(data, function(d){return d[0].x;}).rangeRoundBands([margin.left ,width - margin.left - margin.right], .08), "bottom");
		  this.renderAxes(xScale, "bottom");
				//Render yAxis
			// this.renderAxes(d3.scale.linear().domain([max, 0]).range([ margin.bottom, height - margin.top - margin.bottom]), "left");
			this.renderAxes(yScale, "left");

			return fmBars

	}


	//Lets make some Axes
	fmBars.renderAxes = function(scale, orient){

		var axes =  d3.svg.axis()
			.scale(scale)
			.orient(orient)
			.ticks(10);

		svg.append("g")
			.attr("class", "axis")
			.attr("transform", function(){
				if(["top", "bottom"].indexOf(orient) >= 0){
					return "translate(" + 0 + "," + (height - margin.bottom - margin.top)  +")";
				} else {
					return "translate(" + 50 + "," + (margin.bottom - margin.top - padding  ) + ")";

				}
			})
			.call(axes);
		return fmBars;
	}

  	//make objects callable
    if (typeof define === "function" && define.amd) define(fmBars); else if (typeof module === "object" && module.exports) module.exports = fmBars;
  this.fmBars = fmBars;
}();
