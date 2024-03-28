$(document).ready(function() {

var graphTXT = '#444444';
var tempData, tripData;

	    //drawing temp/trip trend map
  			  var margin = {top: 35, right: 60, bottom: 35, left: 30},
			  width= 330 - margin.left - margin.right,
			  height = 175 - margin.top - margin.bottom;

			 //  var ticks = s3scale.domain().filter(function(d,i){ return !(i%10); } );
				// axis.tickValues( ticks );

			  // var parseTime = d3.timeParse("%B-%Y");

			  var x = d3.scale.ordinal().rangePoints([7, width-5]);
			  var y0 = d3.scaleLinear().range([height, 0]);
			  var y1 = d3.scaleLinear().range([height, 0]);


			  var prefix = d3.format(".1s");
				console.log(prefix(20000)); // "G"


			  var xAxis = d3.svg.axis()
				  .scale(x)
				  .orient("bottom");

			  var valueline = d3.line()
			      .x(function(d) { return x(d.month); })
			      .y(function(d) { return y0(d.tempbos); })
			      .curve(d3.curveCardinal);

			  var valueline2 = d3.line()
			      .x(function(d) { return x(d.month); }) 
			      .y(function(d) { return y1(d.tripbos); })
			      .curve(d3.curveCardinal);

			  var valueline3 = d3.line()
			      .x(function(d) { return x(d.month); })
			      .y(function(d) { return y0(d.tempsfo); })
			      .curve(d3.curveCardinal);

			  var valueline4 = d3.line()
			      .x(function(d) { return x(d.month); }) 
			      .y(function(d) { return y1(d.tripsfo); })
			      .curve(d3.curveCardinal);    

			  var svg = d3.select("#graph").append("svg")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .append("g")
			      .attr("transform",
			            "translate("+margin.left + "," + margin.top +")");   

             
			  d3.csv("./data/data5.csv", function(error, data) {
			      if(error) throw error;

			      data.forEach(function(d){
			         d.month = d.month;
			         d.tempbos = +d.tempbos;
			         d.tripbos = +d.tripbos; 
			         d.tempsfo = +d.tempsfo;
			         d.tripsfo = +d.tripsfo; 
			      });

                  x.domain(data.map(function(d) { return d.month; }));
			      // x.domain([0, d3.scaleLinear(data, function(d) {return d.month;}));
			      y0.domain([-20, d3.max(data, function(d) {return Math.max(d.tempbos+5);})]);
			      y1.domain([0, d3.max(data, function(d) {return Math.max(d.tripbos+10000);})]);

                  svg.append("rect")
                      .attr("x", "-4px")
                      .attr("y", "-8px")
                      .attr("width", "75%")
                      .attr("height", "69%")
                      .attr("fill", "black")
                      .attr("opacity", "0.1");

                  svg.append("text")
					  .attr("x", -15)             
					  .attr("y", -15)
					  .attr("class", "gText-temp")
					  // .style('fill', graphTXT)
					  .attr("text-anchor", "middle")  
					  .text('°C');

                  svg.append("text")
					  .attr("x", width+17)             
					  .attr("y", -13)
					  .attr("class", "gText")
					  .style('fill', graphTXT)
					  .attr("text-anchor", "middle")  
					  .text('Trip');  

                  svg.append("text")
					  .attr("x", 30)             
					  .attr("y", height+20)
					  .attr("class", "axisX")
					  .style('fill', graphTXT)
					  .attr("text-anchor", "middle")  
					  .text('Aug2014');

                  svg.append("text")
					  .attr("x", (width / 2))             
					  .attr("y", height+20)
					  .attr("class", "axisX")	
					  .style('fill', graphTXT)	 
					  .attr("text-anchor", "middle")  
					  .text('Jan2015')

                  svg.append("text")
					  .attr("x", (width-30))             
					  .attr("y", height+20)
 					  .attr("class", "axisX")
					  .style('fill', graphTXT)
					  .attr("text-anchor", "middle") 
					  .text('Jul2015');
			          
			      svg.append("path")
			          .data([data])
			          .attr("class", "tripG-bos")
			          .attr("d", valueline2);

			      svg.append("path")
			          .data([data])
			          .attr("class", "tempG-bos")
			          .attr("d", valueline);

			      svg.append("path")
			          .data([data])
			          .attr("class", "tripG-sfo")
			          .attr("d", valueline4);

			      svg.append("path")
			          .data([data])
			          .attr("class", "tempG-sfo")
			          .attr("d", valueline3);

			      svg.append("g")
			          .attr("transform", "translate(0," + height + ")")
			          // .attr("class", "axisX")
			          // .call(d3.axisBottom(x));

			      svg.append("g")
			          .attr("class", "axisBlue")
			          .call(d3.axisLeft(y0).ticks(5));

			      svg.append("g")
			          .attr("class", "axisWhite")
			          .attr("transform", "translate( " + width + ", 0 )")
			          .call(d3.axisRight(y1).ticks(5).tickFormat(d3.format(".0s")));
			    
			  });

		window.onload = function(){
				$(".month-btn").css("opacity", 1);
		};

}); //$(document).ready(function() {