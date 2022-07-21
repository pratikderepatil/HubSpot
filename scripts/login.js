
let login=async()=>{
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_pass").value;
    let login_data={
        username:email,
        password:password
    }
    login_data=JSON.stringify(login_data);
    console.log(login_data);
    let login_api_link ='https://masai-api-mocker.herokuapp.com/auth/login';
    let response= await fetch(login_api_link,{
        method: 'POST',
        body:login_data,
        headers:{
            'Content-Type': 'application/json',
        }
    });
    let data = await response.json();
    data = (JSON.stringify(data));
   // validateuser(email,password);
    //let x= await fetch(`https://masai-api-mocker.herokuapp.com/user/${}`);
    //console.log(x.json())
}









// let validateuser=(email,password)=>{
//     if(email==="123@gmail.com"&&password==12345678){
//         console.log("login successful")
//         window.location.href="navbar.html";
//     }else{
//         if(email!="123@gmail.com"){
//             console.log("Not a registeres user , sign up")
//         }else if(password!="12345678"){
//             console.log("wrong password")
//         }
//     }
// }