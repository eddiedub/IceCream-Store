document.addEventListener('DOMContentLoaded',function(){const parallax=document.querySelector('.parallax');window.addEventListener('scroll',function(){let offset=window.pageYOffset;parallax.style.backgroundPositionY=offset*0.7+'px'});const menuItems=document.querySelectorAll('.menu-item');menuItems.forEach(item=>{item.addEventListener('mouseover',function(){this.classList.add('active')});item.addEventListener('mouseout',function(){this.classList.remove('active')})});const loadingScreen=document.querySelector('.loading-screen');window.addEventListener('load',function(){loadingScreen.classList.add('hide')});const contactForm=document.getElementById('contact-form');contactForm.addEventListener('submit',function(e){e.preventDefault()})})