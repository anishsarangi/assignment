window.onload=()=>{
    document.getElementById('register').onclick=()=>{
        document.getElementById("login-form").style.display="none";
        document.getElementById("register-form").style.display="block";
    }
    document.getElementById('login').onclick=()=>{
        document.getElementById("register-form").style.display="none";
        document.getElementById("login-form").style.display="block";
    }
    // document.getElementById('register-form-submit').onclick=(e)=>{
    //     e.preventDefault();
    //     var register_username=document.getElementById("register-username").value;
    //     var register_studentid=document.getElementById("register-studentid").value;
    //     var register_password=document.getElementById("register-password").value;
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //         if(xhttp.readyState == 4 && xhttp.status == 200) {
    //             alert(xhttp.responseText);
    //         }
    //     }
    //     xhttp.open("POST", "/register", true);
    //     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xhttp.send(`username=${register_username}&studentid=${register_studentid}&password=${register_password}`);
    // }
    // document.getElementById('login-form-submit').onclick=(e)=>{
    //     e.preventDefault();
    //     var login_username=document.getElementById("login-username").value;
    //     var login_password=document.getElementById("login-password").value;
    //     var http = new XMLHttpRequest();
    //     http.onreadystatechange = function() {
    //         if(http.readyState == 4 && http.status == 200) {
    //             var response=JSON.parse(http.responseText);
    //             if(response.code==200){
    //                 var xhttp= new XMLHttpRequest();
    //                 xhttp.onload = function() {
    //                     console.log("hi");
    //                 }
    //                 xhttp.open("GET","/dashboard",true);
    //                 xhttp.send();
    //             }
    //         }
    //     }
    //     http.open("POST", "/login", true);
    //     http.setRequestHeader("Content-type", "application/json");
    //     var sending={
    //         username: login_username,
    //         password: login_password
    //     }
    //     http.send(JSON.stringify(sending));
    // }
}