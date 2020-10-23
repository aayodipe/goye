const menuIcon  =  document.querySelector('.menu') 
const menuBar =  document.querySelector('.menu-bar') 
const menuTime =  document.querySelector('.menu-time') 
const menuDisplay = document.querySelector('.nav-list')



function toggleMenu() {
 
        if (menuDisplay.style.display === "none") {
            menuDisplay.style.display = "flex";
            // menuTime.style.opacity = 1;
            menuBar.style.opacity = 0;
     

     
        } else {
            menuDisplay.style.display = "none" 
            // menuTime.style.opacity = 0
            menuBar.style.opacity = 1
        }
      }
      
    
menuIcon.addEventListener('click', toggleMenu)



