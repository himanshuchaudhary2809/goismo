import React from "react";
import Sidebar from "./Sidebar";

const LayOut = ({ children }) => {
	return (
		<div className="dashboard">
			<Sidebar />
			<div className="right">
				<>{children}</>
			</div>
		</div>
	);
};

export default LayOut;
