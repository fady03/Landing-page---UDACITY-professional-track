const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');

function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link"> ${sec.dataset.nav}</a> </li>`
        navList.appendChild(listItem);
    };
}
createListItem();
// end of creating navbar
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
//End of creating function for scroll behavior
function activeSection (){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 150 && sectionBond.bottom >= -400){
            section.classList.add("your-active-class");
            navActive[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
};
// End of creating function for activation mode
function toggleNavBar(){
    let userScroll;
    //Default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    // Cleartimeout throughout the scrolling
    window.clearTimeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
// End fun for Toggle thr navBar (activation Mode) 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the scroll event 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});