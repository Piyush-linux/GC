window.onload = function () {
	
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	title:{
		text:"Fortune 500 Companies by Country"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		// gridColor: "rgba(1,77,101,.1)",
		gridColor: "rgba(255,200,200,0.8);",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "rgba(255,200,200,0.8);",
		dataPoints: [
			{ y: 3, label: "Delhi" },
			{ y: 7, label: "Mumbai" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 12, label: "Netherlands" },
			{ y: 25, label: "Britain" },
			{ y: 29, label: "France" },
			{ y: 103, label: "China" },
		]
	}]
});
chart.render();

}