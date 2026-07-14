//=========================================================
// ELEMENTS
//=========================================================

const form = document.getElementById("signupForm");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");

const terms = document.getElementById("terms");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

const roleCards = document.querySelectorAll(".role-card");
const selectedRole = document.getElementById("selectedRole");

//=========================================================
// ROLE SELECTOR
//=========================================================

roleCards.forEach(card=>{

card.addEventListener("click",()=>{

roleCards.forEach(item=>item.classList.remove("active"));

card.classList.add("active");

selectedRole.value=card.dataset.role;

});

});

//=========================================================
// PASSWORD TOGGLE
//=========================================================

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

}

else{

password.type="password";

togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

}

});

toggleConfirmPassword.addEventListener("click",()=>{

if(confirmPassword.type==="password"){

confirmPassword.type="text";

toggleConfirmPassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

}

else{

confirmPassword.type="password";

toggleConfirmPassword.innerHTML='<i class="fa-solid fa-eye"></i>';

}

});

//=========================================================
// NAME VALIDATION
// Letters & Spaces Only
//=========================================================

function validateName(){

const regex=/^[A-Za-z ]+$/;

if(fullName.value.trim()===""){

nameError.textContent="Full Name is required.";

return false;

}

if(!regex.test(fullName.value.trim())){

nameError.textContent="Only letters are allowed.";

return false;

}

if(fullName.value.trim().length<3){

nameError.textContent="Minimum 3 characters required.";

return false;

}

nameError.textContent="";

return true;

}

//=========================================================
// EMAIL VALIDATION
//=========================================================

function validateEmail(){

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email.value.trim()===""){

emailError.textContent="Email is required.";

return false;

}

if(!regex.test(email.value.trim())){

emailError.textContent="Enter a valid email address.";

return false;

}

emailError.textContent="";

return true;

}

//=========================================================
// PASSWORD VALIDATION
//=========================================================

function validatePassword(){

const value=password.value;

if(value===""){

passwordError.textContent="Password is required.";

return false;

}

if(value.length<8){

passwordError.textContent="Minimum 8 characters required.";

return false;

}

passwordError.textContent="";

return true;

}

//=========================================================
// PASSWORD STRENGTH
//=========================================================

password.addEventListener("input",()=>{

let strength=0;

const value=password.value;

if(value.length>=8) strength++;

if(/[A-Z]/.test(value)) strength++;

if(/[0-9]/.test(value)) strength++;

if(/[!@#$%^&*]/.test(value)) strength++;

switch(strength){

case 1:

strengthFill.style.width="25%";

strengthFill.style.background="#ff4d4d";

strengthText.textContent="Weak Password";

break;

case 2:

strengthFill.style.width="50%";

strengthFill.style.background="#ff9800";

strengthText.textContent="Medium Password";

break;

case 3:

strengthFill.style.width="75%";

strengthFill.style.background="#2196F3";

strengthText.textContent="Good Password";

break;

case 4:

strengthFill.style.width="100%";

strengthFill.style.background="#4CAF50";

strengthText.textContent="Strong Password";

break;

default:

strengthFill.style.width="0";

strengthText.textContent="Password Strength";

}

});

//=========================================================
// CONFIRM PASSWORD
//=========================================================

function validateConfirmPassword(){

if(confirmPassword.value===""){

confirmPasswordError.textContent="Confirm Password is required.";

return false;

}

if(confirmPassword.value!==password.value){

confirmPasswordError.textContent="Passwords do not match.";

return false;

}

confirmPasswordError.textContent="";

return true;

}

//=========================================================
// TERMS
//=========================================================

function validateTerms(){

if(!terms.checked){

termsError.textContent="Please accept Terms & Conditions.";

return false;

}

termsError.textContent="";

return true;

}

//=========================================================
// LIVE VALIDATION
//=========================================================

fullName.addEventListener("input",validateName);

email.addEventListener("input",validateEmail);

password.addEventListener("input",validatePassword);

confirmPassword.addEventListener("input",validateConfirmPassword);

//=========================================================
// SUBMIT
//=========================================================

form.addEventListener("submit",(e)=>{

e.preventDefault();

const isName=validateName();

const isEmail=validateEmail();

const isPassword=validatePassword();

const isConfirm=validateConfirmPassword();

const isTerms=validateTerms();

if(isName && isEmail && isPassword && isConfirm && isTerms){
const btn=document.querySelector(".signup-btn");

btn.innerHTML='<i class="fa-solid fa-circle-check"></i> Account Created Successfully';

btn.style.background="#28a745";

btn.disabled=true;

setTimeout(()=>{

    window.location.href="login.html";

},2000);



}

});