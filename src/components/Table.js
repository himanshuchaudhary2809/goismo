import React from "react";
import "./Table.css";
import { BiEditAlt } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
const Table = () => {
	const data = [
		{
			Name: "Harinder Singh",
			Role: "Super Admin",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
		{
			Name: "Victoria parez",
			Role: "Tester",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
		{
			Name: "Ravikiran Talekar",
			Role: "Super Admin",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
		{
			Name: "Harinder Singh",
			Role: "Super Admin",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
		{
			Name: "Harinder Singh",
			Role: "Super Admin",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
		{
			Name: "Cora Medina",
			Role: "Project Manager",
			Create_Date: "24-oct-2024",
			Status: "Active ",
			Action: "icon",
		},
	];
	return (
		<div className="table_container">
			<h4 className="table_heading">List Users</h4>

			<table className="main_table">
				<thead className="table_head">
					<th>Name</th>
					<th>Role</th>
					<th>Create Date</th>
					<th>Status</th>
					<th>Action</th>
				</thead>
				{data.map((item) => (
					<tbody className="table_body">
						<td>{item.Name}</td>
						<td>
							<div
								className={
									item.Role === "Super Admin" ? "role_btn" : "role_btn c_pink"
								}
							>
								{item.Role}
							</div>
						</td>
						<td>{item.Create_Date}</td>
						<td>{item.Status}</td>
						<td>
							<BiEditAlt className="table_action" />
							<HiOutlineTrash className="table_action" />
						</td>
					</tbody>
				))}
			</table>
		</div>
	);
};

export default Table;
