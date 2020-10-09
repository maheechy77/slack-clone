import React, { useState, useEffect } from "react";
import "./Sidebar.css";

import {
	FiberManualRecord,
	Create,
	InsertComment,
	Inbox,
	Drafts,
	BookmarkBorder,
	PeopleAlt,
	Apps,
	FileCopy,
	ExpandLess,
	ExpandMore,
	Add,
} from "@material-ui/icons";
import SidebarOption from "../SidebarOption/SidebarOption";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Sidebar = () => {
	const [{ user }] = useStateValue();
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		);
	}, []);

	return (
		<div className="sidebar">
			<div className="sidear_header">
				<div className="sidebar_info">
					<h2>Slack</h2>
					<h3>
						<FiberManualRecord />
						{user?.displayName}
					</h3>
				</div>
				<Create />
			</div>
			<SidebarOption Icon={InsertComment} title="Threads" />
			<SidebarOption Icon={Inbox} title="Mentions & Reactions" />
			<SidebarOption Icon={Drafts} title="Saved items" />
			<SidebarOption Icon={BookmarkBorder} title="hannel Browser" />
			<SidebarOption Icon={PeopleAlt} title="People & User groups" />
			<SidebarOption Icon={Apps} title="Apps" />
			<SidebarOption Icon={FileCopy} title="File Browser" />
			<SidebarOption Icon={ExpandLess} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMore} title="Channels" />
			<hr />
			<SidebarOption Icon={Add} addChannelOption title="Add Channel" />
			{channels.map((channel) => (
				<SidebarOption title={channel.name} key={channel.id} id={channel.id} />
			))}
		</div>
	);
};

export default Sidebar;
