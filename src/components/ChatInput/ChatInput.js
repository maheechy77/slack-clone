import React, { useState } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import "./ChatInput.css";

const ChatInput = ({ channelName, channelId }) => {
	const [input, setInput] = useState("");
	const [{ user }] = useStateValue();

	const sendMessge = (e) => {
		e.preventDefault();

		if (channelId) {
			db.collection("rooms").doc(channelId).collection("messages").add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userImage: user.photoURL,
			});
		}
		setInput("");
	};
	return (
		<div className="chatInput">
			<form>
				<input
					type="text"
					placeholder={`Message #${channelName?.toLowerCase()}`}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit" onClick={sendMessge}>
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatInput;
