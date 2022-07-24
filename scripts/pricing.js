import navbar from "../components/inportNav.js";
import { footerFunc } from "../components/footer.js";

document.getElementById("total_Navbar").innerHTML = navbar();
footerFunc();

let market = () => {
	let mar = document.getElementById("mm");
	mar.style.backgroundColor = "skyblue";

	mar.style.borderBottom = "5px solid #33475b";
};
market();

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
