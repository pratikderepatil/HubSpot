let demoform = () => {
	return `<div id="cont">
				<h1 style="text-align: center; margin-top: -20px">Get a demo</h1>
				<p style="text-align: center; margin-top: -10px">
					Complete the form for a free demo of HubSpot’s software.
				</p>
				<div id="input6">
					<div class="fields">
						<label for="">First Name</label>
						<input type="text" id="firstname" class="field" />
					</div>
					<div class="fields">
						<label for="">Last Name</label>
						<input type="text" id="lastname" class="field" />
					</div>
					<div class="fields">
						<label for="">Email</label>
						<input type="email" id="email" class="field" />
					</div>
					<div class="fields">
						<label for="">Phone Number</label>
						<input type="number" id="phonenumber" class="field" />
					</div>
					<div class="fields">
						<label for="">Company Name</label>
						<input type="text" id="companyname" class="field" />
					</div>
					<div class="fields">
						<label for="">Website URL</label>
						<input type="text" id="companywebsite" class="field" />
					</div>
				</div>

				<div class="fields">
					<label for="">Country of Company Headquarters</label>
					<select name="" id="companylocation" class="field">
						<option value="--">Please Select</option>
						<option value="EU">Europe</option>
						<option value="UK">United Kingdom</option>
					</select>
				</div>

				<div class="fields">
					<label for="">What are you hoping to learn?</label>
					<input type="text" id="crmusage" class="field" />
				</div>
				<p>
					We're committed to your privacy. HubSpot uses the information you
					provide to us to contact you about our relevant content, products, and
					services. You may unsubscribe from these communications at any time.
					For more information, check out our
					<a href="./commingsoon.html"> Privacy Policy.</a>
				</p>
				<button id="next">Next</button>
			</div>`;
};

export default demoform;
