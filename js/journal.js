/*=========================================================
            TRENDING STORIES
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".story-card");

if(!cards.length) return;

/*=========================================
        SCROLL REVEAL
=========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add("story-show");

},index*150);

}

});

},{
threshold:.2
});

cards.forEach(card=>observer.observe(card));

/*=========================================
        3D TILT
=========================================*/

if(window.innerWidth>768){

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;
const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=
`perspective(1200px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

}

/*=========================================
        SPOTLIGHT
=========================================*/

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

card.style.setProperty("--mx",(e.clientX-rect.left)+"px");

card.style.setProperty("--my",(e.clientY-rect.top)+"px");

});

});

});

/*=========================================================
            NEWSLETTER VALIDATION
=========================================================*/

const form=document.getElementById("newsletterForm");

const email=document.getElementById("journalEmail");

const error=document.getElementById("emailError");

const success=document.getElementById("subscribeSuccess");

form.addEventListener("submit",function(e){

    e.preventDefault();

    error.textContent="";

    success.textContent="";

    const value=email.value.trim();

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(value===""){

        error.textContent="Please enter your email address.";

        email.focus();

        return;

    }

    if(!pattern.test(value)){

        error.textContent="Please enter a valid email address.";

        email.focus();

        return;

    }

    success.textContent="🎉 Successfully subscribed!";

    email.value="";

    setTimeout(()=>{

        success.textContent="";

    },3000);

});