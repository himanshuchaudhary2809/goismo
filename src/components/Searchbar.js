import React from "react";
import { FiSearch } from "react-icons/fi";

const searchbar = () => {
	return (
		<>
			<div className="input-group">
				<FiSearch className="search_icon" />
				<input className="input" type="text" placeholder="Search" />
			</div>
		</>
	);
};

export default searchbar;
