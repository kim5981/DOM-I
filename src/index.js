

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------- NAV BAR --------------------------------------------------------------------*/
const navItems = document.querySelectorAll("nav a");
const navArray = Array.from(navItems);
navArray[0].textContent = "Custom Content"
navArray[1].textContent = "Mods";
navArray[2].textContent = "CC Finds"
navArray[3].textContent = "WIP";
navArray[4].textContent = "About Me";
navArray[5].textContent = "Contact";



/* ------------------------------------------------------------------------------------------------------------------------
-------------------------------------  CTA SECTION --------------------------------------------------------------------*/
const greeting = document.querySelector(".cta-text h1")
greeting.textContent = "Kawaii Stacie";

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML= "More";

const artistPhoto = document.querySelector("#cta-img");
artistPhoto.src= "../mocks/img/stacieportrait.jpg";

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

console.log(summaryArray[4]);
