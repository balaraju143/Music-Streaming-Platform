//=========================================================
// ELEMENTS
//=========================================================

const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

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

//=========================================================
// EMAIL VALIDATION
//=========================================================

function validateEmail(){

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){

        emailError.textContent="Email is required.";

        return false;

    }

    if(!pattern.test(email.value.trim())){

        emailError.textContent="Please enter a valid email address.";

        return false;

    }

    emailError.textContent="";

    return true;

}

//=========================================================
// PASSWORD VALIDATION
//=========================================================

function validatePassword(){

    if(password.value.trim()===""){

        passwordError.textContent="Password is required.";

        return false;

    }

    if(password.value.length<8){

        passwordError.textContent="Password must be at least 8 characters.";

        return false;

    }

    passwordError.textContent="";

    return true;

}

//=========================================================
// LIVE VALIDATION
//=========================================================

email.addEventListener("input",validateEmail);

password.addEventListener("input",validatePassword);

//=========================================================
// LOGIN
//=========================================================
//=========================================================
// LOGIN
//=========================================================

form.addEventListener("submit", function(e){

    e.preventDefault();

    const emailValid = validateEmail();

    const passwordValid = validatePassword();

    if(emailValid && passwordValid){

        // Save login email
        localStorage.setItem("userEmail", email.value.trim());

        // Save selected role (optional)
        localStorage.setItem("userRole", selectedRole.value);

        if(selectedRole.value === "artist"){

            window.location.href = "artist-dashboard.html";

        }else{

            window.location.href = "producer-dashboard.html";

        }

    }

});