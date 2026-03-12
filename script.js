//cursor hover effects

const cursor=document.getElementById('cursor');
const cursorFollower=document.getElementById('cursorFollower');
document.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
    cursorFollower.style.left=e.clientX+'px';
    cursorFollower.style.top=e.clientY+'px';
});

document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));

    el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
});

window.addEventListener('scroll',()=>{
    document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
});

//Hamburger Menu
const hamburger=document.getElementById('hamburger');
const navList=document.getElementById('navList');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

//Paralles mouse movement
document.addEventListener('mousemove',(e)=>{
    const herobg=document.querySelector('.hero-bg');
    const x=(e.clientX/window.innerWidth-0.5)*25;
    const y=(e.clientY/window.innerHeight-0.5)*25;
    herobg.style.transform=`translate(${x}px,${y}px)scale(1.05)`;
});