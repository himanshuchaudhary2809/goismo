import React from "react";
import "./Table2.css";
const Table2 = () => {
	const data = [
		{
			execution: {
				data: "Command and Scripting Interpreter",
				className: "td_blue",
			},
			persistence: {
				data: "Modify System Image",
				className: "td_blue",
			},
			privilegeEscalation: {
				data: "Exploit OS",
				className: "td_yellow",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_yellow",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_yellow",
			},
			lateralMovement: {
				data: "Exploitation of Remote Services",
				className: "td_blue",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_blue",
			},
		},
		{
			execution: {
				data: "Command and Scripting Interpreter",
				className: "td_yellow",
			},
			persistence: {
				data: "Modify System Image",
				className: "td_yellow",
			},
			privilegeEscalation: {
				data: "Exploit OS",
				className: "td_yellow",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_pink",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_blue",
			},
			lateralMovement: {
				data: "Exploitation of Remote Services",
				className: "td_pink",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_pink",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_blue",
			},
		},
		{
			execution: {
				data: "Command and Scripting Interpreter",
				className: "td_blue",
			},
			persistence: {
				data: "Modify System Image",
				className: "td_pink",
			},
			privilegeEscalation: {
				data: "Exploit OS",
				className: "td_yellow",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_pink",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_blue",
			},
			lateralMovement: {
				data: "Exploitation of Remote Services",
				className: "td_pink",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_pink",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_blue",
			},
		},
		{
			execution: {
				data: "",
				className: "",
			},
			persistence: {
				data: "",
				className: "",
			},
			privilegeEscalation: {
				data: "Exploit OS",
				className: "td_pink",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_blue",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_blue",
			},
			lateralMovement: {
				data: "",
				className: "",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_pink",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_pink",
			},
		},
		{
			execution: {
				data: "",
				className: "",
			},
			persistence: {
				data: "",
				className: "",
			},
			privilegeEscalation: {
				data: "",
				className: "",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_blue",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_blue",
			},
			lateralMovement: {
				data: "",
				className: "",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_yellow",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_pink",
			},
		},
		{
			execution: {
				data: "",
				className: "",
			},
			persistence: {
				data: " ",
				className: "",
			},
			privilegeEscalation: {
				data: "",
				className: "",
			},
			defenceEvasion: {
				data: "Subvert Trust Control ",
				className: "td_blue",
			},
			credentialAccess: {
				data: "Adversary-in-the-Middle",
				className: "td_blue",
			},
			discovery: {
				data: "Location Tracking",
				className: "td_blue",
			},
			lateralMovement: {
				data: "",
				className: "",
			},
			collection: {
				data: "Adversary-in-the-Middle",
				className: "td_yellow",
			},
			commandAndControl: {
				data: "Application Layer Protocol",
				className: "td_pink",
			},
		},
	];
	return (
		<div className="table_container2">
			<table className="main_table2">
				<thead className="table_head2">
					<th>Execution</th>
					<th>Persistence</th>
					<th>Privilage Escalation</th>
					<th>Defence Evasion</th>
					<th>Credential Access</th>
					<th>Discovery</th>
					<th>Lateral Movement</th>
					<th>Collection</th>
					<th>Command And Control</th>
				</thead>
				{data.map((item) => (
					<tbody className="table_body2">
						<td className={item.execution.className}>{item.execution.data}</td>
						<td className={item.persistence.className}>
							{item.persistence.data}
						</td>
						<td className={item.privilegeEscalation.className}>
							{item.privilegeEscalation.data}
						</td>
						<td className={item.defenceEvasion.className}>
							{item.defenceEvasion.data}
						</td>
						<td className={item.credentialAccess.className}>
							{item.credentialAccess.data}
						</td>
						<td className={item.discovery.className}>{item.discovery.data}</td>
						<td className={item.lateralMovement.className}>
							{item.lateralMovement.data}
						</td>
						<td className={item.collection.className}>
							{item.collection.data}
						</td>
						<td className={item.commandAndControl.className}>
							{item.commandAndControl.data}
						</td>
					</tbody>
				))}
			</table>
		</div>
	);
};

export default Table2;
