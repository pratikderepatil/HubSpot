let mar=()=>{
    let image = document.getElementById("m_image");
    image.src="https://www.hubspot.com/hubfs/Product_Icon_Only_Marketing_Hub.png";
    let heading = document.getElementById("mhead");
    heading.innerText="Marketing Hub";
    let para= document.getElementById("mp");
    mp.innerText="Marketing software to help you attract the right audience, convert more visitors into customers, and run complete inbound marketing campaigns at scale.";
    
}
let sales=()=>{
    let image = document.getElementById("m_image");
    image.src="https://www.hubspot.com/hubfs/pirate-v2/icons/Product_Icon_Only_Sales_Hub.svg";
    let heading = document.getElementById("mhead");
    heading.innerText="Sales Hub";
    let para= document.getElementById("mp");
    mp.innerText="Sales CRM software to help sales teams close more deals, deepen relationships, and manage their pipeline more effectively.";
    
}
let customer_services=()=>{
    let image = document.getElementById("m_image");
    image.src="https://www.hubspot.com/hubfs/pirate-v2/icons/Product_Icon_Only_Service_Hub.svg";
    let heading = document.getElementById("mhead");
    heading.innerText="Service Hub";
    let para= document.getElementById("mp");
    mp.innerText="Customer service software that helps you conduct seamless onboarding, enable flexible customer support, and deepen customer relationships at scale.";
    
}
let CMS=()=>{
    let image = document.getElementById("m_image");
    image.src="https://www.hubspot.com/hubfs/pirate-v2/icons/Product_Icon_Only_CMS_Hub.svg";
    let heading = document.getElementById("mhead");
    heading.innerText="CMS Hub";
    let para= document.getElementById("mp");
    mp.innerText="Content management software that's flexible for marketers, powerful for developers, and gives your customers a personalized, secure experience.";
    
}
let operations=()=>{
    let image = document.getElementById("m_image");
    image.src="https://www.hubspot.com/hubfs/pirate-v2/icons/Product_Icon_Only_Operations_Hub.svg";
    let heading = document.getElementById("mhead");
    heading.innerText="Operations Hub";
    let para= document.getElementById("mp");
    mp.innerText="Operations software that lets you easily sync, clean, and curate customer data, and automate business processes.";
    
}
let free_tools=()=>{
    let image = document.getElementById("marketing_head");
    image.innerHTML=null;
    let heading = document.createElement("h1");
    heading.innerText="Free Tools";
    let para= document.getElementById("mp");
    mp.innerText="All of HubSpot's free marketing, sales, customer service, CMS, and operations tools. Your access to free tools is not a trial and never expires.";
    image.append(heading);
}