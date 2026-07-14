/*=========================================================
            EXPERIENCE HERO
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            TEXT REVEAL
    =========================================*/


    /*=========================================
            HERO CONTENT REVEAL
    =========================================*/

    const heroItems=document.querySelectorAll(

        ".hero-tag,.experience-content p,.hero-buttons,.hero-stats,.experience-visual"

    );

    heroItems.forEach((item,index)=>{

        item.style.opacity="0";
        item.style.transform="translateY(50px)";
        item.style.transition=".8s ease";

        setTimeout(()=>{

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        },900+(index*180));

    });

    /*=========================================
            COUNTER
    =========================================*/

    const counters=document.querySelectorAll(".hero-stats h3");

    counters.forEach(counter=>{

        const original=counter.innerText;

        const target=parseInt(original.replace(/\D/g,""));

        let current=0;

        const step=Math.ceil(target/60);

        function update(){

            current+=step;

            if(current>=target){

                counter.innerText=original;

                return;

            }

            if(original.includes("K")){

                counter.innerText=current+"K+";

            }

            else{

                counter.innerText=current;

            }

            requestAnimationFrame(update);

        }

        update();

    });

});


/*=========================================================
            FESTIVAL GALLERY
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            SCROLL REVEAL
    =========================================*/

    const cards = document.querySelectorAll(".gallery-card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry,index)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("gallery-show");

                },index*180);

            }

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>observer.observe(card));

    /*=========================================
            3D TILT EFFECT
    =========================================*/

   cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*16;

            const rotateX=((y/rect.height)-0.5)*-16;

            card.style.transform=`
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.05)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}); 

/*=========================================================
            EVENT JOURNEY
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const journeySection = document.querySelector(".event-journey");
    const progressLine = document.querySelector(".line-progress");
    const journeyItems = document.querySelectorAll(".journey-item");

    if(!journeySection) return;

    /*=========================================
            CARD REVEAL
    =========================================*/

    journeyItems.forEach(item=>{

        item.style.opacity="0";
        item.style.transform=item.classList.contains("left")
            ? "translateX(-80px)"
            : "translateX(80px)";

        item.style.transition="all .8s ease";

    });

    const revealObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateX(0)";

            }

        });

    },{

        threshold:.25

    });

    journeyItems.forEach(item=>{

        revealObserver.observe(item);

    });

    /*=========================================
            TIMELINE PROGRESS
    =========================================*/

    function updateTimeline(){

        const rect=journeySection.getBoundingClientRect();

        const windowHeight=window.innerHeight;

        const sectionHeight=journeySection.offsetHeight;

        let progress=((windowHeight-rect.top)/(sectionHeight))*100;

        progress=Math.max(0,Math.min(progress,100));

        progressLine.style.height=progress+"%";

    }

    window.addEventListener("scroll",updateTimeline);

    updateTimeline();

});

/*=========================================================
            SOUND EXPERIENCE
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const soundSection=document.querySelector(".sound-experience");

    if(!soundSection) return;

    /*=========================================
            SCROLL REVEAL
    =========================================*/

    const revealItems=document.querySelectorAll(

        ".equalizer-wrapper,.sound-card,.sound-action"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry,index)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("sound-show");

                },index*180);

            }

        });

    },{

        threshold:.25

    });

    revealItems.forEach(item=>observer.observe(item));

    /*=========================================
            CARD HOVER GLOW
    =========================================*/

    const cards=document.querySelectorAll(".sound-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.setProperty("--x",x+"px");

            card.style.setProperty("--y",y+"px");

        });

    });

    /*=========================================
            RANDOM EQUALIZER SPEED
    =========================================*/

    const bars=document.querySelectorAll(".bar");

    bars.forEach(bar=>{

        const speed=(Math.random()*0.8+0.7).toFixed(2);

        const delay=(Math.random()*0.8).toFixed(2);

        bar.style.animationDuration=`${speed}s`;

        bar.style.animationDelay=`${delay}s`;

    });

});
