/*==========================================
            GLOBAL.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
            LOADER
    ==============================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2000);

    });



    /*==============================
        MOBILE MENU
    ==============================*/

    const menuBtn = document.getElementById("menuToggle");

    const mobileMenu = document.querySelector(".mobile-menu");

    const overlay = document.querySelector(".menu-overlay");

    const mobileLinks = document.querySelectorAll(".mobile-menu a");



    function openMenu() {

        menuBtn.classList.add("active");

        mobileMenu.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }



    function closeMenu() {

        menuBtn.classList.remove("active");

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }



    menuBtn.addEventListener("click", () => {

        if (mobileMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });



    overlay.addEventListener("click", closeMenu);



    mobileLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });



    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });



    /*==============================
        ACTIVE NAVIGATION
    ==============================*/

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-links a");

    const drawerLinks = document.querySelectorAll(".mobile-menu a");



    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });



    drawerLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });



    /*==============================
        SCROLL SHADOW
    ==============================*/

    const header = document.querySelector(".header");



    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 15px 35px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });



    /*==============================
        INTERSECTION OBSERVER
    ==============================*/

    const revealItems = document.querySelectorAll(".reveal");



    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: .15

        }

    );



    revealItems.forEach(item => {

        observer.observe(item);

    });



    /*==============================
        SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));



            if (!target) return;



            e.preventDefault();



            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /*==============================
        BACK TO TOP
    ==============================*/

    const backTop = document.querySelector(".back-top");



    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });



        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



});