const hamburger=document.querySelector('.hamburger')
const navLinks=document.querySelector(".nav-links")
console.log(navLinks)
hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle('open');
})