let signup1 = () => {
	return `<div>
				<h1>Create your free account</h1>
				<div
					style="
						display: grid;
						grid-template-columns: 49% 50%;
						gap: 5%;
						width: 90%;
						justify-content: center;
					"
				>
					<input type="text" id="firstname" placeholder="First name" />
					<input type="text" id="lastname" placeholder="Last name" />
				</div>
				<input type="email" name="" id="email" placeholder="Email address" />
				<button id="next">Next ></button>
				<p style="text-align: center;
	width: 90%;">
					We’re committed to your privacy. HubSpot uses the information you
					provide to us to contact you about our relevant content, products, and
					services. You may unsubscribe from these communications at any time.
					For more information, check out our
					<a href="../comingsoon.html">Privacy Policy</a>
				</p>
			</div>
			<div>
				<img src="./images/signup1.png" alt="Error" style="width: 100%;">
			</div>`;
};

let signup2 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h3 id="name">Nice to meet you </h3>
				<h1 style="margin-top: -20px;">What industry are you in?</h1>
				<select id="industry" placeholder="Search industries">
					<option value="">Search industries</option>
					<option value="Marketing">Marketing</option>
					<option value="Education Management">Education Management</option>
					<option value="Information Technology and Services">Information Technology and Services</option>
					<option value="Other">Other</option>
				</select>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup2.png" alt="Error" style="width: 100%;">
			</div>`;
};

let signup3 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">What is your job role?</h1>
				<select id="jobrole" placeholder="Search job roles">
					<option value="">Search job roles</option>
					<option value="IT Manager">IT Manager</option>
					<option value="IT Specialist">IT Specialist</option>
					<option value="Chief Marketing Officer (CMO)">Chief Marketing Officer (CMO)</option>
					<option value="Marketing Manager">Marketing Manager</option>
					<option value="Student">Student</option>
					<option value="Other">Other</option>
				</select>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup3.png" alt="Error" style="width: 80%;">
			</div>`;
};

let signup4 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">What is your company's name?</h1>
				<input type="text" id="companyname" placeholder="Company name"/>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup4.png" alt="Error" style="width: 100%;">
			</div>`;
};

let signup5 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">What is your company's website?</h1>
				<input type="text" id="companywebsite" placeholder="www.companywebsite.com"/>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup5.png" alt="Error" style="width: 70%;">
			</div>`;
};
let signup6 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">Create your password</h1>
				<input type="password" id="password" placeholder="Password"/>
				<button id="next">Next ></button>
			</div>
			<div>
				<video width="400" height="400" autoplay muted>
					<source src="https://static.hsappstatic.net/signup-ui-lego/static-1.5830/images/animated-images/lock_center.webm" type="video/webm">
				</video>
			</div>`;
};

let signup7 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">Where would you like your data to be hosted?</h1>
				<div style="display: flex; border: 1px solid teal; width: 80%; padding: 20px;">
					<input type="radio" name="companylocation" id="1" value="UN" style="margin: 0 -10% 0 -40%; " /> UN
				</div>
				<div style="display: flex; border: 1px solid teal; width: 80%; padding: 20px;">
					<input type="radio" name="companylocation" id="2" value="EU" style="margin: 0 -10% 0 -40%; " /> EU
				</div>
				<button id="next">Create Account ></button>
				<p style="text-align: center;width: 90%;">
					By creating an account you are agreeing to the
					<a href="../comingsoon.html">HubSpot Customer Terms of Service</a>
				</p>
			</div>
			<div>
				<img src="./images/signup7.png" alt="Error" style="width: 70%;">
			</div>`;
};

let wait = () => {
	return `<div>
				<img src="https://static.hsappstatic.net/signup-ui-lego/static-1.5830/images/airplane-globe-around-animated.gif" style="margin:auto">
			</div>`;
};

let signup8 = () => {
	return `<div style="align-items: flex-start; justify-content: space-evenly;">
				<h1 style="margin-top: -20px;">Which of these sounds most like you?</h1>
				<div style="display: flex; border: 1px solid teal; width: 90%; padding: 20px 0px;">
					<input type="radio" name="crmusage" id="1" value="I have never used a CRM before" style="margin: 0 -30% 0 -40%; " /> I have never used a CRM before
				</div>
				<div style="display: flex; border: 1px solid teal; width: 90%; padding: 20px 0px;">
					<input type="radio" name="crmusage" id="2" value="I'm new to HubSpot, but I have used a CRM before" style="margin:0 -38% 0 -40%; " /> I'm new to HubSpot, but I have used a CRM before
				</div>
				<div style="display: flex; border: 1px solid teal;width: 90%; padding: 20px 0px;">
					<input type="radio" name="crmusage" id="3" value="I know my way around HubSpot pretty well" style="margin: 0 -35% 0 -40%; " /> I know my way around HubSpot pretty well
				</div>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup8.png" alt="Error" style="width: 80%;">
			</div>`;
};

let signup9 = () => {
	return `<div
				style="
					align-items: flex-start;
					justify-content: space-evenly;
					gap: 10px;
				"
			>
				<h1 style="margin-top: -20px">
					Which part of the CRM platform do you want to explore first?
				</h1>
				<p>Don't worry, you can explore the other areas later.</p>
				<div
					style="
						display: grid;
						grid-template-columns: 48% 48%;
						gap: 10px;
						width: 90%;
					"
				>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="1"
							value="Customer Service"
							style="margin: 0 -35% 0 -35%"
						/>
						Customer Service
					</div>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="2"
							value="Operations"
							style="margin: 0 -35% 0 -35%"
						/>
						Operations
					</div>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="3"
							value="Sales"
							style="margin: 0 -35% 0 -35%"
						/>
						Sales
					</div>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="1"
							value="Marketing"
							style="margin: 0 -35% 0 -35%"
						/>
						Marketing
					</div>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="2"
							value="CMS"
							style="margin: 0 -35% 0 -35%"
						/>
						CMS
					</div>
					<div
						style="
							display: flex;
							border: 1px solid teal;
							width: 100%;
							padding: 20px 0px;
						"
					>
						<input
							type="radio"
							name="platform"
							id="3"
							value="I want a general overview"
							style="margin: 0 -35% 0 -35%"
						/>
						I want a general overview
					</div>
				</div>
				<button id="next">Next ></button>
			</div>
			<div>
				<img src="./images/signup8.png" alt="Error" style="width: 80%" />
			</div>`;
};
export {
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
};
