/*=========================================================
            DISCOVER HERO
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            CHANGING HEADING
    =========================================*/

    const words = [
        "Amazing Music",
        "Trending Artists",
        "Top Albums",
        "Live Concerts",
        "Hit Playlists",
        "Unlimited Podcasts"
    ];

    const changingWord = document.querySelector(".changing-word");

    if(changingWord){

        let index = 0;

        setInterval(() => {

            changingWord.style.opacity = "0";
            changingWord.style.transform = "translateY(15px)";

            setTimeout(() => {

                index = (index + 1) % words.length;

                changingWord.textContent = words[index];

                changingWord.style.opacity = "1";
                changingWord.style.transform = "translateY(0)";

            },300);

        },2500);

    }

    /*=========================================
            HERO REVEAL
    =========================================*/

    const heroItems = document.querySelectorAll(
        ".discover-tag, .discover-content h1, .discover-content p, .discover-search, .genre-list, .discover-stats"
    );

    heroItems.forEach((item,index)=>{

        item.style.opacity="0";
        item.style.transform="translateY(40px)";
        item.style.transition="all .8s ease";

        setTimeout(()=>{

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        },index*180);

    });

});


/*=========================================================
        FEATURED CATEGORIES
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".category-card");

    if(cards.length){

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach((entry,index)=>{

                if(entry.isIntersecting){

                    setTimeout(()=>{

                        entry.target.classList.add("show-card");

                    },index*180);

                }

            });

        },{

            threshold:0.2

        });

        cards.forEach(card=>observer.observe(card));

    }

});

/*=========================================================
        MUSIC EXPERIENCE TIMELINE
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const timelineItems = document.querySelectorAll(".timeline-item");

    if(timelineItems.length){

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show-timeline");

                }

            });

        },{

            threshold:0.25

        });

        timelineItems.forEach(item=>{

            observer.observe(item);

        });

    }

});

/*=========================================================
            FINAL CTA SECTION
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            NEWSLETTER VALIDATION
    =========================================*/

    const form = document.getElementById("newsletterForm");
    const email = document.getElementById("newsletterEmail");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("subscribeMessage");

    if(form){

        form.addEventListener("submit",function(e){

            e.preventDefault();

            emailError.textContent="";
            successMessage.textContent="";

            const emailValue=email.value.trim();

            const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(emailValue===""){

                emailError.textContent="Please enter your email address.";

                email.focus();

                return;

            }

            if(!emailPattern.test(emailValue)){

                emailError.textContent="Please enter a valid email address.";

                email.focus();

                return;

            }

            successMessage.textContent="🎉 Successfully subscribed! Welcome to MelodyX.";

            form.reset();

        });

        email.addEventListener("input",()=>{

            emailError.textContent="";
            successMessage.textContent="";

        });

    }

    /*=========================================
            COUNTER ANIMATION
    =========================================*/

    const counters=document.querySelectorAll(".stat-box h3");

    const counterObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const counter=entry.target;

                const originalText=counter.innerText;

                const target=parseInt(originalText.replace(/\D/g,""));

                if(!target) return;

                let current=0;

                const increment=Math.ceil(target/80);

                function updateCounter(){

                    current+=increment;

                    if(current>=target){

                        counter.innerText=originalText;

                        return;

                    }

                    if(originalText.includes("M")){

                        counter.innerText=current+"M+";

                    }else if(originalText.includes("K")){

                        counter.innerText=current+"K+";

                    }else if(originalText.includes("★")){

                        counter.innerText=current+"★";

                    }else{

                        counter.innerText=current+"+";

                    }

                    requestAnimationFrame(updateCounter);

                }

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },{

        threshold:.4

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });

    /*=========================================
            SCROLL REVEAL
    =========================================*/

    const revealItems=document.querySelectorAll(

        ".cta-wrapper,.stat-box"

    );

    const revealObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    revealItems.forEach(item=>{

        revealObserver.observe(item);

    });

});