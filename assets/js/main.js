/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {delay: 400}); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 

/*===== TYPEWRITER EFFECT =====*/
document.addEventListener('DOMContentLoaded', function() {
    const textArray = [" Interior Designer", "Graphic Designer", "Video Editor"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textArray[textArrayIndex];
        const displayText = isDeleting 
            ? currentText.substring(0, charIndex--) 
            : currentText.substring(0, charIndex++);

        document.getElementById('typewriter').innerHTML = displayText;

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
        }

        setTimeout(type, isDeleting ? 100 : 150);
    }

    type();
});

document.querySelectorAll('.circular-progress').forEach(progress => {
    let value = progress.querySelector('.progress-value');
    let startValue = 0;
    let endValue = parseInt(progress.getAttribute('data-percentage'));
    let speed = 30;
    
    let progressInterval = setInterval(() => {
        startValue++;
        value.textContent = `${startValue}%`;
        progress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
        
        if (startValue === endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});

document.querySelectorAll('.skills__data').forEach(skill => {
    const bar = skill.querySelector('.skills__bar::after');
    const percentage = skill.querySelector('.skills__percentage').innerText.trim();
    const widthValue = percentage.replace('%', '');
  
    skill.style.setProperty('--width', `${widthValue}%`);
  });

  function toggleDetails(button) {
    const detailsText = button.nextElementSibling;
  
    if (detailsText.classList.contains('open')) {
      detailsText.classList.remove('open');
      button.innerText = "Details";
    } else {
      detailsText.classList.add('open');
      button.innerText = "Close";
    }
  }


