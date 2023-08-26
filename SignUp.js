if(localStorage.getItem('token')===null||localStorage.getItem('token')===`null`){
  
  
}
else if(localStorage.getItem('token').length>4){
   window.location.href="Profile.html"
}


const signUpButton= document.getElementById("sign-up-button-container");
const mainContainer=document.getElementById("main-container")
const fullNameTextBox=document.getElementById("name-input")
const emailBox=document.getElementById("email-input")
const passwordBox=document.getElementById("password-input")
const confirmPasswordBox=document.getElementById("confirm-password-input")
const error= document.createElement("div");
error.id="error";
error.innerHTML=`Error : All the fields are mandatory`;

signUpButton.addEventListener("click",()=>{
const fullName=fullNameTextBox.value.trim();
const  email= emailBox.value.trim();
const password=passwordBox.value.trim();
const confirmPassword=confirmPasswordBox.value.trim();

if(fullName===''||email===''||password===''||confirmPassword===''){
    mainContainer.insertBefore(error,signUpButton);
    return;

}
if(password!==confirmPassword){
    error.innerHTML=`Error : Confirm Password and Password are not matching`;
    mainContainer.insertBefore(error,signUpButton);
    return;
}
const randomBuffer = new Uint8Array(16);
window.crypto.getRandomValues(randomBuffer);
const token = Array.from(randomBuffer).map(byte => byte.toString(16).padStart(2, '0')).join('');
localStorage.setItem('token',token);
localStorage.setItem('fullName',fullName);
localStorage.setItem('email',email);
localStorage.setItem('password',password);
window.location.href="Profile.html"

})

