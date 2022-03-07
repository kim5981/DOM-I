

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
navArray[4].textContent = "Shop";
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


// * TOP TEXT CONTENT
const featuredH4 = document.querySelector(".featured-cc h4");
featuredH4.textContent = "Featured CC";

const featuredP = document.querySelector(".featured-cc p");
featuredP.textContent = "Et cumque minus ea natus mollitia aut quae dignissimos et ducimus molestiae. Id totam maiores At sunt animi amet dolor in galisum Aut maxime voluptatem ea voluptatem voluptatibus rem vitae enim ut dolor galisum rem repellendus harum sit temporibus maiores 33 velit corporis. "

const aboutH4 = document.querySelector(".about h4");
aboutH4.textContent = "About";

const aboutP = document.querySelector(".about p");
aboutP.textContent = "Lorem ipsum dolor sit amet. Aut eligendi rerum qui quia natus qui voluptatem dolor qui dolor tempore ut unde accusantium et modi delectus. Ea nostrum dicta ut mollitia ullam qui saepe illo eum quibusdam repellat id recusandae"

// *PAGE BREAK IMG

const imgBreak = document.querySelector("#middle-img");
imgBreak.src = "../mocks/img/pgbreak.png"

// * BOTTOM TEXT CONTENT
const solH4 = document.querySelector(".sol h4");
solH4.textContent = "Slice of Life Mod";

const solP = document.querySelector(".sol p");
solP.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"

const lifeDeciderH4 = document.querySelector(".life-decider h4");
lifeDeciderH4.textContent = "Life Decider Mod";

const lifeDeciderP = document.querySelector(".life-decider p");
lifeDeciderP.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here";

const acH4 = document.querySelector(".animal-crossing h4");
acH4.textContent = "Animal Crossing Mod";

const acP = document.querySelector(".animal-crossing p");
acP.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
