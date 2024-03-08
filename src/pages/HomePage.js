import React, { useState } from "react";
import Table2 from "../components/Table2";
import "./HomePage.css";
import SideBar2 from "../components/SideBar2";
import PieChart from "../components/pieChart";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const HomePage = () => {
	const [isWeekly, setIsWeekly] = useState(true);
	const handleCloseWeekly = () => {
		setIsWeekly(false);
	};
	const handleOpenWeekly = () => {
		setIsWeekly(true);
	};
	return (
		<div>
			<div className="image_top_menu">
				<SideBar2 />
				<div className="home_header">
					<p>Files</p>
					<p>Contacts</p>
				</div>
			</div>

			<div className="home_container">
				<h1 className="heading_container">ATTACK MATRIX COVERAGE</h1>
				<div className="home_table_container">
					<Table2 />
				</div>
				{isWeekly ? (
					<div className="weekly_bar">
						<div>
							<div className="arrow_right">
								<MdKeyboardDoubleArrowRight
									onClick={handleCloseWeekly}
									className="arrow"
								/>
							</div>
							<div>
								<h3>Weekly Report</h3>
								<div className="flex_style">
									<div className="pass_flex">
										<div className="pass"></div>
										<p>Pass</p>
									</div>
									<div className="fail_flex">
										<div className="fail"></div>
										<p>Fail</p>
									</div>
									<div className="executed_flex">
										<div className="non_executed"></div>
										<p>Non Executed</p>
									</div>
								</div>
								<div className="pie_class">
									<PieChart />
								</div>
							</div>
							<div className="build_chart">
								<h3>Build ECU_Ver2.1</h3>
								<div className="flex_style">
									<div className="pass_flex">
										<div className="pass"></div>
										<p>Pass</p>
									</div>
									<div className="fail_flex">
										<div className="fail"></div>
										<p>Fail</p>
									</div>
									<div className="executed_flex">
										<div className="non_executed"></div>
										<p>Non Executed</p>
									</div>
								</div>
								<div className="pie_class">
									<PieChart />
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="weekly_bar_close">
						<div className="arrow_right">
							<MdKeyboardDoubleArrowLeft
								onClick={handleOpenWeekly}
								className="arrow"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
