

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Custom Content",
    "nav-item-2": "Mods",
    "nav-item-3": "CC Finds",
    "nav-item-4": "WIP",
    "nav-item-5": "Merch",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "All the Best CC",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Featured CC",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Slice of Life Mod",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Life Decider Mod",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Animal Crossing Mod",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "kawaiistacie@example.io",
  },
  "footer": {
    "copyright": "Copyright Kawaii Stacie 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/kawaii-stacie-logo2.png",
    "cta-img": "https://simstime.net/wp-content/uploads/2021/06/SDF.png",
    "accent-img": "http://localhost:9000/img/pgbreak.png",
  },
};

console.log('hello (˵ ͡o ͜ʖ ͡o˵)');



/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------- LOGO --------------------------------------------------------------------*/
const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];


/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------- NAV BAR --------------------------------------------------------------------*/
const navItems = document.querySelectorAll("nav a");
const navArray = Array.from(navItems);
navArray[0].textContent = siteContent.nav["nav-item-1"];
navArray[1].textContent = siteContent.nav["nav-item-2"];
navArray[2].textContent = siteContent.nav["nav-item-3"];
navArray[3].textContent = siteContent.nav["nav-item-4"];
navArray[4].textContent = siteContent.nav["nav-item-5"];
navArray[5].textContent = siteContent.nav["nav-item-6"];



/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------  CTA SECTION --------------------------------------------------------------------*/
const greeting = document.querySelector(".cta-text h1")
greeting.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML= siteContent.cta.button;

const artistPhoto = document.querySelector("#cta-img");
artistPhoto.src= siteContent.images["cta-img"];
//change later

/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------  MIDDLE TEXT SECTION --------------------------------------------------------------------*/

// * Add add'l class names to e/ text-content div to make accessing their content easier 
const summary = document.querySelectorAll(".text-content")
const summaryArray = Array.from(summary);

summaryArray[0].classList.add("featured-cc");
summaryArray[1].classList.add("about");
summaryArray[2].classList.add("sol");
summaryArray[3].classList.add("life-decider");
summaryArray[4].classList.add("animal-crossing");


// * TOP TEXT CONTENT
const featuredH4 = document.querySelector(".featured-cc h4");
featuredH4.textContent = siteContent["main-content"]["features-h4"];

const featuredP = document.querySelector(".featured-cc p");
featuredP.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(".about h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelector(".about p");
aboutP.textContent = siteContent["main-content"]["about-content"];

// *PAGE BREAK IMG

const imgBreak = document.querySelector("#middle-img");
imgBreak.src = siteContent.images["accent-img"];

// * BOTTOM TEXT CONTENT
const solH4 = document.querySelector(".sol h4");
solH4.textContent = siteContent["main-content"]["services-h4"];

const solP = document.querySelector(".sol p");
solP.textContent = siteContent["main-content"]["services-content"];

const lifeDeciderH4 = document.querySelector(".life-decider h4");
lifeDeciderH4.textContent = siteContent["main-content"]["product-h4"];

const lifeDeciderP = document.querySelector(".life-decider p");
lifeDeciderP.textContent = siteContent["main-content"]["product-content"];

const acH4 = document.querySelector(".animal-crossing h4");
acH4.textContent = siteContent["main-content"]["vision-h4"];

const acP = document.querySelector(".animal-crossing p");
acP.textContent = siteContent["main-content"]["vision-content"];

/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------  FOOTER/CONTACT SECTION --------------------------------------------------------------------*/
const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = "Get In Touch: "

const contactP = document.querySelectorAll(".contact p");
const contactArr = Array.from(contactP);

contactArr[0].textContent = "123 Way 456 St Somewhere, USA";
contactArr[1].textContent = "888-888-8888";
contactArr[2].textContent = "kawaiistacie@example.io"

console.log("here is the array: ", contactArr);

// * COPYRIGHT TEXT
const copyright = document.querySelector("footer a");
copyright.innerHTML = "Copyright KawaiiStacie 2022";