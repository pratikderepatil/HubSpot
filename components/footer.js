let freetools = [
	{ Name: "Website Grader", link: "../comingsoon.html" },
	{ Name: "Make My Persona", link: "../comingsoon.html" },
	{ Name: "Email Signature Generator", link: "../comingsoon.html" },
	{ Name: "Blog Ideas Generator", link: "../comingsoon.html" },
	{ Name: "Invoice Template Generator", link: "../comingsoon.html" },
	{ Name: "Marketing Plan Generator", link: "../comingsoon.html" },
	{ Name: "Free Business Templates", link: "../comingsoon.html" },
	{ Name: "Industry Benchmark Data", link: "../comingsoon.html" },
	{ Name: "Software Comparisons Library", link: "../comingsoon.html" },
	{ Name: "Website Themes & Templates", link: "../comingsoon.html" },
];
let customer = [
	{ Name: "Customer Support", link: "../comingsoon.html" },
	{ Name: "Join a Local User Group", link: "../comingsoon.html" },
];
let partners = [
	{ Name: "All Partner Programs", link: "../comingsoon.html" },
	{ Name: "Solutions Partner Program", link: "../comingsoon.html" },
	{ Name: "App Partner Program", link: "../comingsoon.html" },
	{ Name: "HubSpot for Startups", link: "../comingsoon.html" },
	{ Name: "Affiliate Program", link: "../comingsoon.html" },
];
let company = [
	{ Name: "About Us", link: "../comingsoon.html" },
	{ Name: "Careers", link: "../comingsoon.html" },
	{ Name: "Management Team", link: "../comingsoon.html" },
	{ Name: "Board of Directors", link: "../comingsoon.html" },
	{ Name: "Investor Relations", link: "../comingsoon.html" },
	{ Name: "Blog", link: "../comingsoon.html" },
	{ Name: "Contact Us", link: "../comingsoon.html" },
];
let popular = [
	{ Name: "Free Meeting Scheduler App", link: "../comingsoon.html" },
	{ Name: "Social Media Tools", link: "../comingsoon.html" },
	{ Name: "Email Tracking Software", link: "../comingsoon.html" },
	{ Name: "Sales Email Automation", link: "../comingsoon.html" },
	{ Name: "Ads Software", link: "../comingsoon.html" },
	{ Name: "Email Marketing Software", link: "../comingsoon.html" },
	{ Name: "Lead Management Software", link: "../comingsoon.html" },
	{ Name: "Pipeline Management Tools", link: "../comingsoon.html" },
	{ Name: "Sales Email Templates", link: "../comingsoon.html" },
	{ Name: "Help Desk Software", link: "../comingsoon.html" },
	{ Name: "Free Online Form Builder", link: "../comingsoon.html" },
	{ Name: "Free Chatbot Builder", link: "../comingsoon.html" },
	{ Name: "Free Live Chat Software", link: "../comingsoon.html" },
	{ Name: "Marketing Analytics", link: "../comingsoon.html" },
	{ Name: "Free Landing Page Builder", link: "../comingsoon.html" },
];

let displayFunc = (data, str, clas) => {
	let div = document.createElement("div");
	let cont = document.createElement("div");
	div.setAttribute("class", clas);
	let h2 = document.createElement("h2");
	h2.style.color = "#fff";
	h2.innerText = str;
	div.style.display = "flex";
	div.style.flexDirection = "column";
	div.style.gap = "10px 50px";
	div.style.flexWrap = "wrap";
	data.map((ele) => {
		let a = document.createElement("a");
		a.style.color = "#cbd6e2";
		a.style.textDecoration = "none";
		a.addEventListener("mouseover", (event) => {
			event.target.style.color = "#0091ae";
			event.target.style.textDecoration = "underline";
		});
		a.addEventListener("mouseout", (event) => {
			event.target.style.color = "#cbd6e2";
			event.target.style.textDecoration = "none";
		});
		a.innerText = ele.Name;
		a.href = ele.link;
		div.append(a);
	});
	cont.append(h2, div);
	return cont;
};

let footerFunc = () => {
	let container = document.getElementById("footer");
	let div = displayFunc(popular, "Popular Features", "popular");
	let div2 = displayFunc(freetools, "Free Tools");
	let div3 = displayFunc(company, "Company");
	let div4 = displayFunc(customer, "Customers");
	let div5 = displayFunc(partners, "Partners");
	div.style.margin = " 0 20%";
	let cont2 = document.createElement("div");
	cont2.style.display = "flex";
	cont2.style.flexDirection = "column";
	cont2.style.justifyContent = "space-between";
	let cont = document.createElement("div");
	cont.style.display = "grid";
	cont.style.gridTemplateColumns = "30% 50%";
	cont.style.justifyContent = "space-evenly";
	let cont1 = document.createElement("div");
	cont1.style.display = "flex";
	cont1.style.justifyContent = "space-evenly";
	cont2.append(div4, div5);
	cont1.append(div2, div3, cont2);
	cont1.style.borderLeft = "1px solid #99b1cc";
	cont.append(div, cont1);
	container.style.backgroundColor = "#2d3e50";
	container.style.padding = "50px 0";

	let cont3 = document.createElement("div");
	cont3.style.display = "flex";
	cont3.style.justifyContent = "center";
	cont3.style.alignItems = "center";
	cont3.style.margin = "30px 0 20px 0";

	let div6 = document.createElement("div");
	div6.style.width = "20%";
	div6.style.borderTop = "1px solid #99b1cc";
	let div7 = document.createElement("div");
	div7.style.width = "20%";
	div7.style.borderTop = "1px solid #99b1cc";

	let img = document.createElement("img");
	img.src = "../images/socialmedia.png";
	img.style.width = "auto";
	cont3.append(div6, img, div7);

	let cont4 = document.createElement("div");
	cont4.style.display = "flex";
	cont4.style.flexDirection = "column";
	cont4.style.justifyContent = "center";
	cont4.style.alignItems = "center";

	let img1 = document.createElement("img");
	img1.src =
		"https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg";
	img1.style.width = "auto";
	img1.addEventListener("click", () => {
		window.location.href = "../index.html";
	});
	img1.style.cursor = "pointer";
	let p = document.createElement("p");
	p.innerText = "Copyright © 2022 Team: roomy-pet-3292";
	p.style.color = "#cbd6e2";
	let div8 = document.createElement("div");
	div8.style.width = "20%";
	div8.style.display = "flex";
	div8.style.justifyContent = "space-around";

	let a = document.createElement("a");
	a.innerText = "Legal Stuff";
	a.href = "../comingsoon.html";
	a.style.color = "#fff";
	a.addEventListener("mouseover", (event) => {
		event.target.style.color = "#0091ae";
		event.target.style.textDecoration = "none";
	});
	a.addEventListener("mouseout", (event) => {
		event.target.style.color = "#fff";
		event.target.style.textDecoration = "underline";
	});
	let a2 = document.createElement("a");
	a2.innerText = "Privacy Policy";
	a2.href = "../comingsoon.html";
	a2.style.color = "#fff";
	a2.style.borderRight = "1px solid #99b1cc";
	a2.style.borderLeft = "1px solid #99b1cc";
	a2.style.padding = "0 10px";
	a2.addEventListener("mouseover", (event) => {
		event.target.style.color = "#0091ae";
		event.target.style.textDecoration = "none";
	});
	a2.addEventListener("mouseout", (event) => {
		event.target.style.color = "#fff";
		event.target.style.textDecoration = "underline";
	});

	let a3 = document.createElement("a");
	a3.innerText = "Security";
	a3.href = "../comingsoon.html";
	a3.style.color = "#fff";
	a3.addEventListener("mouseover", (event) => {
		event.target.style.color = "#0091ae";
		event.target.style.textDecoration = "none";
	});
	a3.addEventListener("mouseout", (event) => {
		event.target.style.color = "#fff";
		event.target.style.textDecoration = "underline";
	});

	div8.append(a, a2, a3);
	cont4.append(img1, p, div8);
	container.append(cont, cont3, cont4);
};

export { footerFunc };
