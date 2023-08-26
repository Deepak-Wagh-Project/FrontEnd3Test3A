const fullName=document.getElementById("full-name-content");
const eMail=document.getElementById("email-content");
const password=document.getElementById("password-content");
const logoutButton=document.getElementById("logout");

fullName.innerHTML=`<p>${localStorage.getItem("fullName")}</p>`
eMail.innerHTML=`<p>${localStorage.getItem("email")}</p>`
password.innerHTML=`<p>${localStorage.getItem("password")}</p>`

logoutButton.addEventListener("click",()=>{
    localStorage.setItem('fullName',null);
    localStorage.setItem('email',null);
    localStorage.setItem('password',null);
    window.location.href="SignUp.html"
})