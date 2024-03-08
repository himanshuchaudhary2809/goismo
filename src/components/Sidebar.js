import React from "react";
import Goismo from "../assets/images/Goismo.png";
import profile from "../assets/images/profile.jpeg";

import { FaTachometerAlt } from "react-icons/fa";

import { FaRegStar } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	const sidebarData = [
		{
			key: "projectconfiguration",
			name: "Project Configuration",
			icon: <FaTachometerAlt />,
			subMenu: false,
			path: "/projectconfiguration",
		},
		{
			key: "accessmanagement",
			name: "Access Management",
			icon: <FaTachometerAlt />,
			subMenu: false,
			path: "/accessmanagement",
		},
		{
			key: "twg",
			name: "TWG",
			icon: <FaTachometerAlt />,
			subMenu: false,
			path: "/twg",
		},
		{
			key: "favorites",
			name: "Favorites",
			icon: <FaRegStar />,
			subMenu: false,
			path: "/favorites",
		},

		{
			key: "recentpages",
			name: "Recent Pages",
			icon: <BiBookAlt />,
			submenu: false,
			path: "/recentpages",
		},
	];

	return (
		<div className="sidebar">
			<div className="header">
				<img src={Goismo} alt="icon" />
			</div>
			<div className="profile_div">
				<div className="profile_img_div">
					<img className="profile_img" src={profile} alt="icon" />
				</div>
				<div className="profile_text">
					<p className="profile_para_name">Ajay Murthy</p>
					<p className="profile_name">Admin</p>
				</div>
			</div>
			<div className="side-list">
				{sidebarData.map((item, index) => (
					<li
						className={
							item.path === location.pathname
								? "selected-list-item"
								: "list-item"
						}
						key={index}
					>
						<div className="list-group">
							<div className="icon-holder">{item.icon}</div>
							<span>{item.name}</span>
						</div>
					</li>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
