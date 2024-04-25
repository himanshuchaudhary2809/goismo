import React from "react";
import "./Accessmanagement.css";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Searchbar from "../components/Searchbar";
import bell from "../assets/svg/bell.svg";
import Table from "../components/Table";
import Layout from "../components/Layout";
import profile from "../assets/images/profile.jpeg";
const Accessmanagement = () => {
	return (
		<Layout>
			<div className="access_managemnet_container">
				<div className="profile_header_container">
					<div className="main_profile_text">
						<h2>Hello, Himanshu Chaudhary</h2>
						<p>Have a Nice Day</p>
					</div>
					<div className="main_profile_content">
						<div className="bell_icon_div">
							<IoMdNotifications className="bell_icon" />
						</div>
						<div className="profile_div mt-0 w-200 ">
							<div className="profile_img_div">
								<img className="profile_img" src={profile} alt="icon" />
							</div>
							<div className="profile_text">
								<p className="profile_para_name">Ajay Murthy</p>
								<p className="profile_name">Admin</p>
							</div>
							<div className="down_arrow">
								<IoIosArrowDown className="down_arrow_icon" />
							</div>
						</div>
					</div>
				</div>
				<div className="search_container_text">
					<h1 className="user_text_name">User Dashboard</h1>
				</div>

				<div className="search_container">
					<div className="search_flex">
						<Searchbar />
						<button className="user_button">Add User +</button>
					</div>
					<div className="sort_btn_flex">
						<div className="sort_btn">
							<p>Sort By </p>
							<i>
								<IoIosArrowDown />
							</i>
						</div>
						<div className="sort_btn">
							<p>Saved Search </p>
							<i>
								<IoIosArrowDown />
							</i>
						</div>
						<div>
							<img className="filter_icon" src={bell} alt="filter_icon" />
						</div>
					</div>
				</div>
				<Table />
			</div>
		</Layout>
	);
};

export default Accessmanagement;
