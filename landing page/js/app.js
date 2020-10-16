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
 * Define Global Variables
 * 
*/
//performance at the begining 
let before = performance.now();
//getting ul elemn
const navMenu = document.querySelector('#navbar__list');
//getting sections list
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
*/
// creating list items with anchor tags to link them with sections
const addElementsToNavMenu= () =>{
	let liElements = '';
	//looping on sections list
	sections.forEach(section => {
		// getting id of each section
		const id = section.getAttribute('id');
		// getting data for each section
		const data = section.getAttribute('data-nav');
		// populating list item that has anchor tag as child element to link with each section by its id
		liElements += `<li class="nav-item"> <a class = "menu__link" href = "#${id}"> ${data} </a></li>`;
	});
	//append list items to ul 
	navMenu.innerHTML = liElements;
};

addElementsToNavMenu();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
const addingActiveClass= () =>{
	//looping on sections
	sections.forEach(section =>{
		// getting size of each section and its position relative to the viewport and .top() to give the right postion while scrolling.
		let domRect = section.getBoundingClientRect().top;
		// console.log(domRect);
		// let result = Boolean(domRect<200 && domRect >= -200);
		section.classList.remove("your-active-class");
		section.setAttribute('style','background-color : rgba(255, 255, 255, 0.187)');
		// console.log(Boolean(domRect<200 && domRect >= -200));
		if(Boolean(domRect<200 && domRect >= -200)){
			//changing style for active class
			 section.setAttribute('style','border: 2px solid #527a7a');
			// adding active class
			section.classList.add("your-active-class");

		}
	});
};

 document.addEventListener('scroll',addingActiveClass);


// Scroll to anchor ID using scrollTO event
const scrollTO= () =>{
	//get list of all anchor tags in listItems
	const listItems = document.querySelectorAll('.navbar__menu a');
	//looping on each link
	listItems.forEach(li => {
		li.addEventListener('click',  function() {
			//console.log(li.href);
			// when we click on link on navigation bar we gets string of address of each section and its number then split by #section to get an array of 2 elements [address,number of section]
		let ref = li.href.split('#section');
		//console.log(ref);
		//
		//changing ref to become the id of section linked to li to get it by querySelector
         ref = "#section" + ref[1];
         // let link = document.querySelector(ref);
          //console.log(document.querySelector(ref).offsetTop);
          //scroll to clicked listitem in navigation bar
         window.scrollTo(0, document.querySelector(ref).getBoundingClientRect().top);


	});
});
};
scrollTO();
let after = performance.now()
let perform = after-before;
console.log(perform);
//hiding nav bar while not scrolling
// let bool;
// 	document.addEventListener('scroll',function(){
// 		 bool = true;
// 		console.log(bool);
// 	});
// function hideNav(value){
// 	if(!value){
// 		document.getElementsByClassName("navbar__menu").style.display = "0";
// 	}
// }
// setTimeout(hideNav(bool),1000);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// addElementsToNavMenu();
// Scroll to section on link click

// Set sections as active