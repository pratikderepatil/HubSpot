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
