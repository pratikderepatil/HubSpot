
let login = async () => {
	let email = document.getElementById("login_email").value;
	let password = document.getElementById("login_pass").value;
	validateuser(email, password);
};

let validateuser = (email, password) => {
	let userdata = JSON.parse(localStorage.getItem("users"));
	for (let i = 0; i < userdata.length; i++) {
		let s = userdata[i];
		let homepage = JSON.stringify(s);
		localStorage.setItem("homepage", homepage);

		let message = document.getElementById("message");
		message.innerHTML = null;
		if (email == userdata[i].email && password == userdata[i].password) {
			window.location.href = "loginhomepage.html";
		} else {
			if (email != userdata[i].email) {
				console.log("Not a registeres user , sign up");
				let p = document.createElement("span");
				p.innerText = "Not a registered user ? ";
				let span = document.createElement("span");
				span.innerText = "SIGNUP";
				let a = document.createElement("a");
				a.target = "_blank";
				a.append(span);
				a.href = "signup.html";
				message.style.border = "1px solid red";
				message.style.backgroundColor = "#FDEDEE";
				message.style.width = "500px";
				message.append(p, a);
				return;
			} else if (password != userdata[i].password) {
				let h3 = document.createElement("h1");
				h3.innerText = "This doesn't look right";
				let p = document.createElement("span");
				p.innerText =
					"You've entered an invalid password. For more detail on why this could be happening, please read   ";
				let span = document.createElement("span");
				span.innerText = "This article";
				let a = document.createElement("a");
				a.target = "_blank";
				a.append(span);
				a.href =
					"https://knowledge.hubspot.com/Account/Why-can-t-I-log-into-HubSpot";
				message.style.border = "1px solid red";
				message.style.backgroundColor = "#FDEDEE";
				message.style.width = "500px";
				message.append(h3, p, a);
				return;
			} else {
				console.log("it is not working");
			}
		}
	}
};

