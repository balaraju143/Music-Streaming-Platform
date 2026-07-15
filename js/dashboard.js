/*=========================================
        MUSIC DASHBOARD JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
    /*=====================================
        SHOW LOGIN EMAIL
=====================================*/

const emailElement = document.getElementById("userEmail");

const savedEmail = localStorage.getItem("userEmail");

if(emailElement){

    emailElement.textContent = savedEmail || "Guest User";

}

    /*=====================================
            SIDEBAR
    =====================================*/

    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const menuBtn = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-sidebar");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            sidebar.classList.add("active");
            overlay.classList.add("active");

        });

    }

    if(closeBtn){

        closeBtn.addEventListener("click",()=>{

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        });

    }

    if(overlay){

        overlay.addEventListener("click",()=>{

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        });

    }

    /*=====================================
            ESC CLOSE
    =====================================*/

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        }

    });

    /*=====================================
            CURRENT DATE
    =====================================*/

    const currentDate=document.getElementById("currentDate");

    if(currentDate){

        const today=new Date();

        const options={

            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"

        };

        currentDate.textContent=today.toLocaleDateString("en-US",options);

    }

    /*=====================================
            ACTIVE MENU
    =====================================*/

    const menus=document.querySelectorAll(".sidebar-menu li");

    menus.forEach(menu=>{

        menu.addEventListener("click",()=>{

            menus.forEach(item=>{

                item.classList.remove("active");

            });

            menu.classList.add("active");

        });

    });

    /*=====================================
            SEARCH SONG
    =====================================*/

    const search=document.querySelector(".search-box input");

    const songs=document.querySelectorAll(".recent-item");

    if(search){

        search.addEventListener("keyup",()=>{

            const value=search.value.toLowerCase();

            songs.forEach(song=>{

                const text=song.innerText.toLowerCase();

                if(text.includes(value)){

                    song.style.display="flex";

                }else{

                    song.style.display="none";

                }

            });

        });

    }

    /*=====================================
            COUNTER ANIMATION
    =====================================*/

    const counters=document.querySelectorAll(".stat-card h3");

    counters.forEach(counter=>{

        const original=counter.innerText;

        const number=parseInt(original.replace(/[^\d]/g,""));

        if(isNaN(number)) return;

        let count=0;

        const speed=Math.max(1,Math.floor(number/80));

        const timer=setInterval(()=>{

            count+=speed;

            if(count>=number){

                count=number;

                clearInterval(timer);

            }

            if(original.includes("M")){

                counter.innerHTML=(count/1000000).toFixed(1)+"M";

            }

            else if(original.includes("K")){

                counter.innerHTML=(count/1000).toFixed(1)+"K";

            }

            else if(original.includes("₹")){

                counter.innerHTML="₹"+count.toLocaleString();

            }

            else{

                counter.innerHTML=count.toLocaleString();

            }

        },20);

    });

    /*=====================================
            ICON ACTIVE
    =====================================*/

    const icons=document.querySelectorAll(".icon-btn");

    icons.forEach(icon=>{

        icon.addEventListener("click",()=>{

            icon.classList.toggle("active");

        });

    });

    /*=====================================
            SCROLL ANIMATION
    =====================================*/

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    document.querySelectorAll(".hero,.stat-card,.dashboard-card").forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

    /*=====================================
            HEADER SHADOW
    =====================================*/

    window.addEventListener("scroll",()=>{

        const header=document.querySelector(".topbar");

        if(window.scrollY>30){

            header.style.boxShadow="0 15px 35px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow="var(--shadow)";

        }

    });

    /*=====================================
            PLAY BUTTON EFFECT
    =====================================*/

    document.querySelectorAll(".btn-primary").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-5px) scale(1.03)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0) scale(1)";

        });

    });

    /*=====================================
            DASHBOARD CARDS
    =====================================*/

    document.querySelectorAll(".dashboard-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

    /*=====================================
            PROGRESS BAR
    =====================================*/

    const progress=document.querySelector(".progress-fill");

    if(progress){

        const width=progress.style.width;

        progress.style.width="0";

        setTimeout(()=>{

            progress.style.transition="1.5s ease";

            progress.style.width=width;

        },500);

    }

    /*=====================================
            BAR ANIMATION
    =====================================*/

    const bars=document.querySelectorAll(".bar");

    bars.forEach((bar,index)=>{

        const height=bar.style.height;

        bar.style.height="0";

        setTimeout(()=>{

            bar.style.transition=".8s ease";

            bar.style.height=height;

        },index*120);

    });

    /*=====================================
            AUTO NOTIFICATION
    =====================================*/

    setInterval(()=>{

        const badge=document.querySelector(".icon-btn span");

        if(!badge) return;

        let value=parseInt(badge.innerText);

        value++;

        badge.innerText=value;

    },25000);

});

/*=========================================
        SHOW LOGIN EMAIL
=========================================*/

// Get email from localStorage
const userEmail = localStorage.getItem("userEmail");

const emailElement = document.getElementById("userEmail");

if(emailElement){

    if(userEmail){

        emailElement.textContent = userEmail;

    }else{

        emailElement.textContent = "Guest User";

    }

}



/*=====================================
        CLOSE MOBILE SIDEBAR
=====================================*/

const mobileLinks = document.querySelectorAll(".sidebar-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", function () {

        document.querySelector(".sidebar").classList.remove("active");

        document.querySelector(".sidebar-overlay").classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});