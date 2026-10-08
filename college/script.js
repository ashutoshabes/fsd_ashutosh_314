// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,33,71,.96)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stats h2");

const speed = 100;

const runCounter = () => {

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText);

        let count = 0;

        const update = ()=>{

            const increment = target / speed;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            }

            else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const stats = document.querySelector(".stats");

const observer = new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        runCounter();

        observer.disconnect();

    }

});

observer.observe(stats);

// ===============================
// Reveal Animation
// ===============================

const reveals = document.querySelectorAll(

".about,.card,.placement,.gallery img,.contact-box div"

);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

revealObserver.observe(el);

});

// ===============================
// Active Navbar Link
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="30px";
topBtn.style.bottom="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff9800";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Gallery Zoom
// ===============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="12px";
image.style.boxShadow="0 20px 50px rgba(0,0,0,.5)";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

// ===============================
// Button Hover Animation
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

console.log("ABES Website Loaded Successfully");
const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};