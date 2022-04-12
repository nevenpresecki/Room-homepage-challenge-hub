const nav = document.querySelector(".primary-navigation");
const navToggle = document.getElementsByClassName("mobile-nav-toggle");
const arrowLeft = document.getElementsByClassName("angle_arrow_left");
const arrowRight = document.getElementsByClassName("angle_arrow_right");
const picture = document.querySelectorAll(".picture img");
const article = document.querySelectorAll(".article article")
const media = window.matchMedia("(max-width: 30rem)")


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

function keyDown(event){     
    if(event.keyCode == 37){       
        prevSlide();
    }
    if(event.keyCode == 39){       
        nextSlide();
    }    
}

function autoplaySlider(){
    autoPlayInterval = setInterval(nextSlide, 6000);
}

function pauseSliderAutoplay(){
    clearInterval (autoPlayInterval);  
}

function checkBreakpoint(){
    
    if(media.matches == true){
        picture.forEach(x => change(x, "desktop", "mobile"));    
    }else{
        picture.forEach(x => change(x, "mobile", "desktop"));  
    }

    function change(x, befor, after){
        x.setAttribute("src", x.src.replace(befor, after));    
    }
}


addEventListener("keydown", keyDown);
media.addListener(checkBreakpoint);
autoplaySlider();
document.querySelector(".picture").addEventListener("mouseout", autoplaySlider);
document.querySelector(".picture").addEventListener("mouseover", pauseSliderAutoplay);
navToggle[0].addEventListener("click", toogleImage);
arrowRight[0].addEventListener("click", nextSlide);
arrowLeft[0].addEventListener("click", prevSlide);





