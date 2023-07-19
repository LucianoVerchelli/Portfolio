// Menu navegador 


let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

//scroll 

//agarro los links 
let links = document.querySelectorAll("nav ul li a")

// get sections 
let sections =document.querySelectorAll("section")

window.addEventListener("scroll", function(){

    const scrollPos = window.scrollY
sections.forEach(section =>{
    if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
        links.forEach(link =>{
            link.classList.remove("active");
            if(section.getAttribute("id") === link.getAttribute("href").substring(1)){
                     link.classList.add("active")
            }
      
        });
    }    
    });
});




