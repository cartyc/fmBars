function makeChart(){

			//dictionary to hold javascript object params
			var chart = {};

			//set function variables and default values
			var svg,
				data,
				height = 400,
				width = 600,
				margins = {top: 20, right: 20, bottom: 20, left: 20},
				padding = 5,
				x, y,
				colors = d3.scale.category20c();


			//initialize the svg element
			chart.initialize = function(){

				svg = d3.select("body").append("svg")
						.attr("height", height)
						.attr("width", width);

				return chart

			}


			chart.barChart = function(){

				//Check if the data is stored in an array or a list
				for ( var i in data){
					//If the data is an array
					if (isArray(data[i])){

						svg.selectAll("rect")
							.data(data)
							.enter()
							.append("rect")
							.attr("x", function(d,i){
								return i * (width / data.length);
							})
							.attr("y", function(d){
								return y(d.y);
							})
							.attr("height", function(d){
								return height - y(d.y);
							})
							.attr("width", width / data.length - padding)
							.attr("fill", function(d,i){
								return colors(i);
							});

						renderAxes(svg);

					//If the data is a list
					} else {

						svg.selectAll("rect")
							.data(data)
							.enter()
							.append("rect")
							.attr("x", function(d,i){
								return i * (width / data.length);
							})
							.attr("y", function(d){
								return y(d);
							})
							.attr("height", function(d){
								return height - y(d);
							})
							.attr("width", width / data.length - padding)
							.attr("fill", function(d,i){
								return colors(i);
							});

						renderAxes(svg);

					}
				


				}

			}

			var renderAxes = function(svg){

				// x Axis
				var xAxis = d3.svg.axis()
					.scale(d3.scale.ordinal()
							.domain(data)
							.range(0, width - margins.left - margins.right))
					.orient("bottom");

				svg.append("g")
					.attr("transform", function(d){
						return "translate(" + 0 + "," + (height- margins.bottom - margins.top) + ")";
					})
					.attr("class", "axis")
					.call(xAxis);

				//y Axis
				var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left");

				svg.append("g")
					.attr("transform", function(d){
						return "translate(" + margins.left + "," + margins.bottom + ")";
					})
					.attr("class","axis")
					.call(yAxis);
			}


			chart.setData = function(dataset){
				if(!arguments){
					return data;
				} else {
					data = dataset;
				}

				return chart
			}

			chart.height = function(h){
				if(!arguments){
					return height;
				} else {
					height = h;
				}

				return chart;
			}

			chart.width = function(w){
				if(!arguments){
					return width;
				} else{
					width = w;
				}

				return chart;
			}

			chart.x = function(scale){

				if(!arguments){
					return x;
				} else {
					x = scale;
				}

				return chart;
			}

			chart.y = function(scale){
				if(!arguments){
					return y
				} else {
					y = scale;
				}
			}

			function isArray(what) {
			    return Object.prototype.toString.call(what) === '[object Object]';
			}

			return chart;

		}