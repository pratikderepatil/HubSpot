import {
	signup1,
	signup2,
	signup3,
	signup4,
	signup5,
	signup6,
	signup7,
	wait,
	signup8,
	signup9,
} from "../components/signup1.js";

let x = (id) => {
	return document.getElementById(id).value;
};

let users = JSON.parse(localStorage.getItem("users")) || [];

let signup1Func = () => {
	document.getElementById("main").innerHTML = signup1();
	document.getElementById("next").addEventListener("click", () => {
		let user = {
			firstname: x("firstname"),
			lastname: x("lastname"),
			email: x("email"),
		};
		console.log(user);
		signup2Func(user);
	});
};

let signup2Func = (user) => {
	document.getElementById("main").innerHTML = signup2();
	document.getElementById("abc").innerHTML = null;
	document.getElementById("next").addEventListener("click", () => {
		user = { ...user, industry: x("industry") };
		console.log(user);
		signup3Func(user);
	});
};

let signup3Func = (user) => {
	document.getElementById("main").innerHTML = signup3();
	document.getElementById("next").addEventListener("click", () => {
		user = { ...user, jobrole: x("jobrole") };
		console.log(user);
		signup4Func(user);
	});
};

let signup4Func = (user) => {
	document.getElementById("main").innerHTML = signup4();
	document.getElementById("next").addEventListener("click", () => {
		user = { ...user, companyname: x("companyname") };
		console.log(user);
		signup5Func(user);
	});
};

let signup5Func = (user) => {
	document.getElementById("main").innerHTML = signup5();
	document.getElementById("next").addEventListener("click", () => {
		user = { ...user, companywebsite: x("companywebsite") };
		console.log(user);
		signup6Func(user);
	});
};

let signup6Func = (user) => {
	document.getElementById("main").innerHTML = signup6();
	document.getElementById("next").addEventListener("click", () => {
		user = { ...user, password: x("password") };
		console.log(user);
		signup7Func(user);
	});
};

let signup7Func = (user) => {
	document.getElementById("main").innerHTML = signup7();
	document.getElementById("next").addEventListener("click", () => {
		let radioButtons = document.querySelectorAll(
			'input[name="companylocation"]'
		);
		next.addEventListener("click", () => {
			let companylocation;
			for (let radioButton of radioButtons) {
				if (radioButton.checked) {
					companylocation = radioButton.value;
					break;
				}
			}
			user = { ...user, companylocation: companylocation };
			console.log(user);
			signup8Func(user);
		});
	});
};

let signup8Func = (user) => {
	document.getElementById("main").innerHTML = wait();
	setTimeout(waitfunc, 5000);
	function waitfunc() {
		document.getElementById("main").innerHTML = signup8();
		let radioButtons = document.querySelectorAll('input[name="crmusage"]');
		next.addEventListener("click", () => {
			let crmusage;
			for (let radioButton of radioButtons) {
				if (radioButton.checked) {
					crmusage = radioButton.value;
					break;
				}
			}
			user = { ...user, crmusage: crmusage };
			console.log(user);

			signup9Func(user);
		});
	}
};

let signup9Func = (user) => {
	document.getElementById("main").innerHTML = signup9();
	document.getElementById("next").addEventListener("click", () => {
		let radioButtons = document.querySelectorAll('input[name="platform"]');
		next.addEventListener("click", () => {
			let platform;
			for (let radioButton of radioButtons) {
				if (radioButton.checked) {
					platform = radioButton.value;
					break;
				}
			}
			user = { ...user, companylocation: platform };
			console.log(user);
			users.push(user);
			localStorage.setItem("users", JSON.stringify(users));
			window.location.href = "./login.html";
		});
	});
};

// let signup = [
// 	{
// 		firstname: "",
// 		lastname: "",
// 		email: "",
// 		industry: "",
// 		jobrole: "",
// 		companyname: "",
// 		companywebsite: "",
// 		password: "",
// 		companyloaction: "",
// 		crmusage: "",
// 		platform: "",
// 	},
// ];

signup1Func();
