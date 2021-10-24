/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let counter = 0;
let isScrolling;
const navBar = document.getElementById("navbar__list");
const toTop = document.getElementById("to-top");
const header = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createSection(){
    counter++;
    const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", content);
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavItems(){
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
        active.classList.add("your-active-class");
        activeLink.classList.add("active-link");
    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click
navBar.addEventListener("click", function(event){
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});
// Set sections as active

// observingSections();

// creating more sections by click on the button
for (let i = 1; i < 5; i++) createSection();
createNavItems();

document.getElementById("btn").addEventListener("click", function(){
  createSection();
  createNavItems();
  // observingSections();
});
// save the icon used to go to the top and the header in variables
toTop.addEventListener("click", function(){
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

// Clicking on the icon the document will scroll to the top smoothly


document.onscroll = function() {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(function() {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};

