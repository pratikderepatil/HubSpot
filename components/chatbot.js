let chatbot = () => {
	return `
			<h1>Chat With Our Sales Team</h1>
			<div id="container" >
			<div id="chat">
				<div id="messages"></div>
				<input
					id="input"
					type="text"
					placeholder="Write a message"
					autocomplete="off"
				/>
			</div>
			<p></p>
		</div>`;
};

export default chatbot;
