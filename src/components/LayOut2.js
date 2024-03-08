import React from "react";
import SideBar2 from "./SideBar2";

const LayOut2 = ({ children }) => {
	return (
		<div className="dashboard">
			<SideBar2 />
			<div className="right">
				<>{children}</>
			</div>
		</div>
	);
};

export default LayOut2;
