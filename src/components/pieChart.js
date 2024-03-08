import React from "react";
import "./pieChart.css";

const PieChart = () => {
	return (
		<div className="pie-chart">
			<span className="slice_green_percent">60%</span>
			<div className="slice green"></div>
			<span className="slice_red_percent">25%</span>
			<div className="slice red"></div>
			<span className="slice_yellow_percent">15%</span>
			<div className="slice yellow"></div>
		</div>
	);
};

export default PieChart;
