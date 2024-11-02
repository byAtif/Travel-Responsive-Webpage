// Nav Menu Show

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkAction));

// Scrolling header effect

function scrollHeader(){
    const header= document.getElementById('header');
    if(this.scrollY>=100){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);


// Video

const videoFile=document.getElementById('video-file');
const videoButton=document.getElementById('video-button');
const videoIcon=document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else{
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}

videoButton.addEventListener('click',playPause);

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended',finalVideo);

// Scroll Up

function showScroll(){
    const scrollup=document.getElementById('scroll-up');
    if(this.scrollY>=560){
        scrollup.classList.add('show-scrollup');
    }else{
        scrollup.classList.remove('show-scrollup');
    }
}
window.addEventListener('scroll',showScroll);

// Seciton where you are

const sections = document.querySelectorAll('section[id]');
function ScrollSection(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',ScrollSection);

