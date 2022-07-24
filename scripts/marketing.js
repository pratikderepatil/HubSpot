import navbar from "../components/inportNav.js";
import { footerFunc } from "../components/footer.js";

document.getElementById("total_Navbar").innerHTML = navbar();
footerFunc();

document
	.querySelectorAll("video")[0]
	.addEventListener("mouseover", function () {
		let video = document.querySelectorAll("video")[0];
		let button = document.getElementsByClassName("playButoon")[0];
		button.style.display = "none";
		// video.setAttribute('autoplay','true')
		video.play();
		// console.log(video)
	});
document
	.querySelectorAll("video")[1]
	.addEventListener("mouseover", function () {
		let video = document.querySelectorAll("video")[1];
		let button = document.getElementsByClassName("playButoon")[1];
		button.style.display = "none";
		// video.setAttribute('autoplay','true')
		video.play();
		// console.log('hello2')
	});

document.querySelectorAll("video")[0].addEventListener("mouseout", function () {
	let video = document.querySelectorAll("video")[0];
	let button = document.getElementsByClassName("playButoon")[0];
	button.style.display = "block";

	// video.setAttribute('autoplay','true')
	video.pause();
	console.log(video);
});
document.querySelectorAll("video")[1].addEventListener("mouseout", function () {
	let video = document.querySelectorAll("video")[1];
	let button = document.getElementsByClassName("playButoon")[1];
	button.style.display = "block";
	// video.setAttribute('autoplay','true')
	video.pause();
	// console.log('hello2')
});
document.querySelectorAll("video")[2].addEventListener("mouseout", function () {
	let video = document.querySelectorAll("video")[2];
	let button = document.getElementsByClassName("playButoon")[2];
	button.style.display = "block";
	// video.setAttribute('autoplay','true')
	video.pause();
	// console.log('hello3')
});
document.querySelectorAll("video")[3].addEventListener("mouseout", function () {
	let video = document.querySelectorAll("video")[3];
	let button = document.getElementsByClassName("playButoon")[3];
	button.style.display = "block";
	// video.setAttribute('autoplay','true')
	video.pause();
	// console.log('hello4')
});

document.getElementById("contactsales").addEventListener("click", () => {
	window.location.href = "./contactsales.html";
});

document.getElementById("login").addEventListener("click", () => {
	window.location.href = "./login.html";
});

document.getElementById("marketing123").addEventListener("click", () => {
	window.location.href = "./marketing.html";
});

document.getElementById("overvi").addEventListener("click", () => {
	window.location.href = "./Overview.html";
});

document.getElementById("pricei").addEventListener("click", () => {
	window.location.href = "./pricing.html";
});

document.getElementById("demofrom").addEventListener("click", () => {
	window.location.href = "s./contactsales.html";
});

