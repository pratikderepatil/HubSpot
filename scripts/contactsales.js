import chatbot from "../components/chatbot.js";
import demoform from "../components/demoform.js";
import { footerFunc } from "../components/footer.js";

document.getElementById("chatbot").innerHTML = chatbot();
document.getElementById("demoform").innerHTML = demoform();
footerFunc();

let demousers = JSON.parse(localStorage.getItem("demousers")) || [];

let scrollFunc = (id) => {
	const element = document.getElementById(id);
	element.scrollIntoView();
};

let x = (id) => {
	return document.getElementById(id).value;
};

document.getElementById("next").addEventListener("click", () => {
	let user = {
		firstname: x("firstname"),
		lastname: x("lastname"),
		email: x("email"),
		companywebsite: x("companywebsite"),
		companyname: x("companyname"),
		companylocation: x("companylocation"),
		crmusage: x("crmusage"),
	};
	demousers.push(user);
	localStorage.setItem("demousers", JSON.stringify(demousers));
	let h2 = document.createElement("h2");
	h2.innerText = `Hi ${user.firstname}, you will shortly receive an email...`;
	document.getElementById("cont").innerHTML = null;
	document.getElementById("cont").append(h2);
	scrollFunc("demoform");
});

const utterances = [
	["how are you", "how is life", "how are things"],
	["hi", "hey", "hello", "good morning", "good afternoon"],
	["what are you doing", "what is going on", "what is up"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	[
		"your name please",
		"your name",
		"may i know your name",
		"what is your name",
		"what call yourself",
	],
	["happy", "good", "fun", "wonderful", "fantastic", "cool"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice"],
	["bye", "good bye", "goodbye", "see you later"],
	["what should i eat today"],
	["what", "why", "how", "where", "when"],
	["no", "not sure", "maybe", "no thanks"],
	[""],
	["haha", "ha", "lol", "hehe", "funny", "joke"],
];

const answers = [
	[
		"Fine... how are you?",
		"Pretty well, how are you?",
		"Fantastic, how are you?",
	],
	["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
	[
		"Nothing much",
		"About to go to sleep",
		"Can you guess?",
		"I don't know actually",
	],
	["I am infinite"],
	["I am just a bot", "I am a bot. What are you?"],
	["The one true God, JavaScript"],
	["I am nameless", "I don't have a name"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!"],
	["What about?", "Once upon a time..."],
	["Tell me a story", "Tell me a joke", "Tell me about yourself"],
	["Bye", "Goodbye", "See you later"],
	["Pasta", "Burger"],
	["Great question"],
	["That's ok", "What do you want to talk about?"],
	["Please say something :("],
	["Haha!", "Good one!"],
];

const alternatives = ["Go on...", "Try again"];

let inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		let input = inputField.value;
		inputField.value = "";
		output(input);
	}
});

function output(input) {
	let product;
	let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
	text = text
		.replace(/ a /g, " ")
		.replace(/whats/g, "what is")
		.replace(/please /g, "")
		.replace(/ please/g, "")
		.replace(/r u/g, "are you");

	if (compare(utterances, answers, text)) {
		product = compare(utterances, answers, text);
	} else {
		product = alternatives[Math.floor(Math.random() * alternatives.length)];
	}

	addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
	let reply;
	let replyFound = false;
	for (let x = 0; x < utterancesArray.length; x++) {
		for (let y = 0; y < utterancesArray[x].length; y++) {
			if (utterancesArray[x][y] === string) {
				let replies = answersArray[x];
				reply = replies[Math.floor(Math.random() * replies.length)];
				replyFound = true;
				break;
			}
		}
		if (replyFound) {
			break;
		}
	}
	return reply;
}

function addChatEntry(input, product) {
	const messagesContainer = document.getElementById("messages");
	let userDiv = document.createElement("div");
	userDiv.id = "user";
	userDiv.className = "user response";	
	https: userDiv.innerHTML = `<span>${input}</span>`;
	messagesContainer.appendChild(userDiv);

	let botDiv = document.createElement("div");
	let botText = document.createElement("span");
	botDiv.id = "bot";
	botDiv.className = "bot response";
	botText.innerText = "Typing...";
	let imag = document.createElement("img");
	imag.src = "https://www.mailerlite.com/assets/integration/hubspot-icon.png";
	imag.style.height = "30px";
	imag.style.marginRight = "10px";
	botDiv.append(imag, botText);
	messagesContainer.appendChild(botDiv);

	messagesContainer.scrollTop =
		messagesContainer.scrollHeight - messagesContainer.clientHeight;

	setTimeout(() => {
		botText.innerText = `${product}`;
	}, 2000);
}
