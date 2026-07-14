/*=========================================================
                    HOME.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            HERO SLIDER
    =========================================*/

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let current = 0;

        slides[0].classList.add("active");

        setInterval(() => {

            slides[current].classList.remove("active");

            current = (current + 1) % slides.length;

            slides[current].classList.add("active");

        }, 5000);

    }

    /*=========================================
            COUNTER
    =========================================*/

    const stats = document.querySelector(".listeners-card h2");

    if (stats) {

        let started = false;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !started) {

                    started = true;

                    const target = 18.5;

                    let current = 0;

                    const timer = setInterval(() => {

                        current += 0.2;

                        stats.innerHTML = current.toFixed(1) + "M+";

                        if (current >= target) {

                            stats.innerHTML = "18.5M+";

                            clearInterval(timer);

                        }

                    }, 25);

                }

            });

        });

        observer.observe(stats);

    }

    /*=========================================
            GSAP
    =========================================*/

    if (typeof gsap !== "undefined") {

        gsap.from(".hero-badge", {
            opacity: 1,
            y: -40,
            duration: 0.8
        });

        gsap.from(".hero-title", {
            opacity: 1,
            y: 50,
            duration: 1,
            delay: 0.3
        });

        gsap.from(".hero-description", {
            opacity: 1,
            y: 30,
            duration: 0.8,
            delay: 0.6
        });

        gsap.from(".hero-buttons", {
            opacity: 1,
            y: 30,
            duration: 0.8,
            delay: 0.9
        });

        gsap.from(".music-tags span", {
            opacity: 1,
            scale: 0.8,
            stagger: 0.08,
            delay: 1.1
        });

        gsap.from(".live-panel", {
            opacity: 1,
            x: 80,
            duration: 1,
            delay: 0.8
        });

        gsap.from(".now-playing-card", {
            opacity: 1,
            y: 40,
            duration: 0.8,
            delay: 1.2
        });

        gsap.from(".artist-card", {
            opacity: 1,
            x: 40,
            duration: 0.8,
            delay: 1.4
        });

        gsap.from(".listeners-card", {
            opacity: 1,
            scale: 0.8,
            duration: 0.8,
            delay: 1.6
        });

    }

});



/*=========================================================
            TRENDING ALBUMS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            ALBUM REVEAL
    =========================================*/

    const albumCards = document.querySelectorAll(".album-card");

    if (albumCards.length) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 120);

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.2

        });

        albumCards.forEach(card => observer.observe(card));

    }

    /*=========================================
            PARALLAX GLOW
    =========================================*/

    const section = document.querySelector(".trending-section");
    const glows = document.querySelectorAll(".album-glow");

    if (section && glows.length) {

        section.addEventListener("mousemove", (e) => {

            const rect = section.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            glows.forEach((glow, index) => {

                const move = (index + 1) * 15;

                glow.style.transform =
                    `translate(${x * move}px, ${y * move}px)`;

            });

        });

        section.addEventListener("mouseleave", () => {

            glows.forEach(glow => {

                glow.style.transform = "translate(0,0)";

            });

        });

    }

    /*=========================================
            GSAP
    =========================================*/

    if (typeof gsap !== "undefined") {

        gsap.from(".section-header", {

            opacity: 1,

            y: 60,

            duration: 1

        });

        gsap.from(".album-card", {

            opacity: 1,

            y: 80,

            stagger: 0.15,

            duration: 0.8,

            delay: 0.3

        });

        gsap.from(".albums-btn", {

            opacity: 1,

            y: 40,

            duration: 0.8,

            delay: 0.8

        });

    }

});



/*=========================================================
            FEATURES SECTION
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            REVEAL CARDS
    =========================================*/

    const featureCards = document.querySelectorAll(".feature-card");

    if(featureCards.length){

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach((entry,index)=>{

                if(entry.isIntersecting){

                    setTimeout(()=>{

                        entry.target.classList.add("show");

                    },index*120);

                    observer.unobserve(entry.target);

                }

            });

        },{

            threshold:.2

        });

        featureCards.forEach(card=>observer.observe(card));

    }

    /*=========================================
            ICON HOVER
    =========================================*/

    featureCards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.classList.add("active");

        });

        card.addEventListener("mouseleave",()=>{

            card.classList.remove("active");

        });

    });

    /*=========================================
            GSAP ANIMATION
    =========================================*/

    if(typeof gsap!=="undefined"){

        gsap.from(".features-section .section-header",{

            opacity:1,

            y:60,

            duration:1

        });

        gsap.from(".feature-card",{

            opacity:1,

            y:80,

            stagger:.15,

            duration:.8,

            delay:.3

        });

    }

});



/*=========================================================
                WORLD MUSIC SECTION
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            REVEAL ANIMATION
    =========================================*/

    const worldItems = document.querySelectorAll(
        ".world-map, .world-stat-card, .section-header"
    );

    if (worldItems.length) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 120);

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.2

        });

        worldItems.forEach(item => observer.observe(item));

    }

    /*=========================================
            MAP PIN HOVER
    =========================================*/

    const points = document.querySelectorAll(".map-point");

    points.forEach(point => {

        point.addEventListener("mouseenter", () => {

            point.classList.add("active");

        });

        point.addEventListener("mouseleave", () => {

            point.classList.remove("active");

        });

    });

    /*=========================================
            COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".world-stat-card h3");

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text.replace(/\D/g, ""));

        if (!number) return;

        let current = 0;

        const step = Math.ceil(number / 60);

        const update = () => {

            current += step;

            if (current >= number) {

                counter.innerText = text;

                return;

            }

            if (text.includes("M")) {

                counter.innerText = current + "M+";

            } else {

                counter.innerText = current + "+";

            }

            requestAnimationFrame(update);

        };

        const observer = new IntersectionObserver(entries => {

            if (entries[0].isIntersecting) {

                update();

                observer.disconnect();

            }

        });

        observer.observe(counter);

    });

    /*=========================================
            GSAP (OPTIONAL)
    =========================================*/

    if (typeof gsap !== "undefined") {

        gsap.from(".world-map", {

            opacity: 1,

            scale: .9,

            duration: 1

        });

        gsap.from(".world-stat-card", {

            opacity: 1,

            x: 80,

            stagger: .2,

            duration: .8

        });

        gsap.from(".map-point", {

            scale: 0,

            stagger: .15,

            duration: .6,

            delay: .5

        });

    }

});


/*=========================================================
            NEWSLETTER SUBSCRIBE
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("newsletterForm");
    const email = document.getElementById("newsletterEmail");
    const emailError = document.getElementById("emailError");
    const subscribeMessage = document.getElementById("subscribeMessage");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailError.textContent = "";
        subscribeMessage.textContent = "";

        const emailValue = email.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        /*==============================
                EMPTY EMAIL
        ==============================*/

        if (emailValue === "") {

            emailError.textContent = "Please enter your email address.";

            email.focus();

            return;

        }

        /*==============================
                INVALID EMAIL
        ==============================*/

        if (!emailPattern.test(emailValue)) {

            emailError.textContent = "Please enter a valid email address.";

            email.focus();

            return;

        }

        /*==============================
                SUCCESS
        ==============================*/

        subscribeMessage.textContent = "🎉 Thank you! You have subscribed successfully.";

        subscribeMessage.style.color = "#39d98a";

        form.reset();

    });

    /*==============================
            REMOVE ERROR
    ==============================*/

    email.addEventListener("input", function () {

        emailError.textContent = "";
        subscribeMessage.textContent = "";

    });

});