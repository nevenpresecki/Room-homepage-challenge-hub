const nav = document.querySelector(".primary-navigation");
const navToggle = document.getElementsByClassName("mobile-nav-toggle");
const arrowLeft = document.getElementsByClassName("angle_arrow_left");
const arrowRight = document.getElementsByClassName("angle_arrow_right");
const picture = document.querySelectorAll(".picture img");
const article = document.querySelectorAll(".article article")

function toogleImage (){
    let visiblity = nav.getAttribute("data-visible");
    
    if (visiblity === "true") {
    nav.setAttribute("data-visible", false);
    navToggle[0].setAttribute("aria-expanded", false);
    }
    else{
    nav.setAttribute("data-visible", true);
    navToggle[0].setAttribute("aria-expanded", true);
    } 
}   

function nextSlide() {    
    let pics = [...picture];
    let arti = [...article];
    
    for(i = 0; i < pics.length; i++ ){

        let active = pics[i].getAttribute("class");   
              
        if(active === "active"){
            pics[i].removeAttribute("class");
            arti[i].hidden = true;

            if(i == pics.length - 1){
                pics[0].setAttribute("class", "active");            
                arti[0].hidden = false;  
                }
            else{
                pics[i+1].setAttribute("class", "active");            
                arti[i+1].hidden = false;  
            }    
            
            break  
        }
      
    }    
}

function prevSlide() {    
    let pics = [...picture];
    let arti = [...article];
     
    for(i = pics.length - 1; i >= 0; i-- ){

        let active = pics[i].getAttribute("class");
        
        if(active === "active"){            
            pics[i].removeAttribute("class");
            arti[i].hidden = true;

            if(i == 0){
                pics[pics.length - 1].setAttribute("class", "active");            
                arti[pics.length - 1].hidden = false; 
            }
            else{
                pics[i-1].setAttribute("class", "active");            
                arti[i-1].hidden = false;  
            }

            break             
        }
      
    }    
}

navToggle[0].addEventListener("click", toogleImage);
arrowRight[0].addEventListener("click", nextSlide);
arrowLeft[0].addEventListener("click", prevSlide);





