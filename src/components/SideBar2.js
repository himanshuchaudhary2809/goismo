import React, { useState } from "react";

import favorite from "../assets/svg/favorite.svg";
import recent from "../assets/svg/recent.svg";
import profile2 from "../assets/svg/profile.svg";
import setting from "../assets/svg/setting.svg";
import logout from "../assets/svg/logout.svg";
import goismo from "../assets/svg/goismo.svg";
import "./Sidebar2.css";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

import home from "../assets/svg/home.svg";

const SideBar2 = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const sidebarData = [
		{
			key: "homepage",
			name: "Home Page",
			icon: <img src={home} alt="home icon" />,
		},
		{
			key: "projects",
			name: "-- Projects",
			icon: <img src={profile2} alt="profile icon" />,
			children: [
				{
					value: "+ TCU2MY24",
				},
				{
					value: "-- IHU2MY24",
					children: [
						{
							value: "-- ECUs",
							children: [{ value: "+ TGW" }, { value: "-- IHU" }],
						},
					],
				},
			],
		},

		{
			key: "favorites",
			name: "+ Favorites",
			icon: <img src={favorite} alt="favorite icon" />,
			children: [
				{ value: "+ IHU2MY24" },
				{ value: "+ IHU" },
				{ value: "+ WIFI" },
			],
		},

		{
			key: "recentpages",
			name: "+ Recent Pages",
			icon: <img src={recent} alt="recent icon" />,
			children: [
				{ value: "+ TCU2MY24" },
				{ value: "+ TGW" },
				{ value: "+ Ethernet" },
			],
		},
	];
	const handleCloseSideBar = () => {
		setSidebarOpen(false);
	};
	const handleOpenSideBar = () => {
		setSidebarOpen(true);
	};

	return (
		<div>
			<div className="header2">
				<img src={goismo} alt="icon" />
			</div>
			{sidebarOpen ? (
				<div className="sidebar2">
					<div className="double_arrow_left_flex">
						<MdKeyboardDoubleArrowLeft
							onClick={handleCloseSideBar}
							className="double_arrow_left"
						/>
					</div>

					<div className="side_main_list2">
						<div className="side_list2">
							{sidebarData.map((item, index) => (
								<li className="list-item" key={index}>
									<div className="list-group">
										<div className="icon-holder">{item.icon}</div>
										<span>{item.name}</span>
									</div>
									<div className="sidebar_submenu">
										{item.children &&
											item.children.map((child) => (
												<div>
													<p>{child.value}</p>
													<div className="sidebar_submenu">
														{child.children &&
															child.children.map((subChild) => (
																<div>
																	<p>{subChild.value}</p>
																	<div className="sidebar_submenu2">
																		{subChild.children &&
																			subChild.children.map((subChild2) => (
																				<div className="sidebar_submenu3">
																					<p>{subChild2.value}</p>
																				</div>
																			))}
																	</div>
																</div>
															))}
													</div>
												</div>
											))}
									</div>
								</li>
							))}
						</div>
						<div className="logset_icon">
							<img src={setting} alt="setting icon" />
							<img src={logout} alt="logout icon" />
						</div>
					</div>
				</div>
			) : (
				<div className="sidebar_open">
					<div className="double_arrow_left_flex">
						<MdKeyboardDoubleArrowRight
							onClick={handleOpenSideBar}
							className="double_arrow_left"
						/>
					</div>
					<div className="logset_icon2">
						<img src={setting} alt="setting icon" />
						<img src={logout} alt="logout icon" />
					</div>
				</div>
			)}
		</div>
	);
};

export default SideBar2;
