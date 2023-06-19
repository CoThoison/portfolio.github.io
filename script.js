const menuHamburger = document.querySelector(".menuHamburger");
const navLinks = document.querySelector(".nav-links");
 
menuHamburger.addEventListener('click',()=>{
	navLinks.classList.toggle('mobile-menu');
})

const nav_buttons = document.querySelectorAll('ul.nav-links a');
nav_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    navLinks.classList.toggle('mobile-menu');
  });
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('div[id]');
  let currentSection = '';
  
  sections.forEach(function(section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
  
    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
      currentSection = section.getAttribute('id');
    }
  });
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.classList.remove('current');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('current');
    }
  });
});