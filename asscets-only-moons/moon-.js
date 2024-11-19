// const loopvideo = document.getElementById("moon_loop_")
// loopvideo.addEventListener('ended',() =>  {
//     loopvideo.currentTime = 0;
//     loopvideo.play();
// })

const imgchanger = document.getElementById("img_changer");
const imgchanger_btn1 = document.getElementById("conatiner_1_btn_1");
const imgchanger_btn2 = document.getElementById("conatiner_2_btn_2");
const imgchanger_btn3 = document.getElementById("conatiner_3_btn_3");
const imgchanger_btn4 = document.getElementById("conatiner_4_btn_4");



imgchanger_btn1.addEventListener('click', () => {
    imgchanger.style.backgroundImage = 'url("/asscets-toatl-5/c1.jpg")';
    imgchanger.style.backgroundPosition = "center";
    imgchanger.style.backgroundRepeat = "no-repeat";
    imgchanger.style.backgroundSize = "cover";

  
});
imgchanger_btn2.addEventListener('click', () => {
    imgchanger.style.backgroundImage = 'url("/asscets-toatl-5/c2.jpg")';
    imgchanger.style.backgroundPosition = "center";
    imgchanger.style.backgroundRepeat = "no-repeat";
    imgchanger.style.backgroundSize = "cover";

});
imgchanger_btn3.addEventListener('click', () => {
    imgchanger.style.backgroundImage = 'url("/asscets-toatl-5/c3.jpg")';
    imgchanger.style.backgroundPosition = "center";
    imgchanger.style.backgroundRepeat = "no-repeat";
    imgchanger.style.backgroundSize = "cover";
});


imgchanger_btn4.addEventListener('click', () => {
    imgchanger.style.backgroundImage = 'url("/asscets-toatl-5/c4.jpg")';
    imgchanger.style.backgroundPosition = "center";
    imgchanger.style.backgroundRepeat = "no-repeat";
    imgchanger.style.backgroundSize = "cover";
});



// get ecleipes btn
const conatiner_lunerr_1 = document.getElementById("conatiner_luner_1")
const conatiner_toatl_22 = document.getElementById("conatiner_toatl_2")
const conatiner_partical_33 = document.getElementById("conatiner_partical_3")
const conatiner_reset_3 =document.getElementById("conatiner_reset_3")



// details 
const details_in_comiping1 =document.getElementById("details_in_comiping")  



// img 
const imgchnger1 = document.getElementById("conatiner_img_eclipes")


// loading dots
const loading_11 = document.getElementById("loading_1")

conatiner_lunerr_1.addEventListener('click' , () => {
    setTimeout(() => {
        loading_11.style.opacity = "1"
    }, 1);
})

conatiner_lunerr_1.addEventListener('click' ,() => {
    setTimeout(() => {
        if(conatiner_lunerr_1){
            details_in_comiping1.innerHTML = '<p class="paragraph_get"> Luner Eclipes </p><br><p class="paragraph_get">Date: March 25 2024,<br>  Visibility: Americas</p><br><p class="paragraph_get">Date: February 20, 2027,<br> Visibility: Americas, Europe, Africa, Asia</p><p class="paragraph_get">date :July 18, 2027 <br> Visibility: Eastern Africa, Asia, Australia, Pacific</p><p class="paragraph_get"> date : August 17, 2027, <br> Visibility: Pacific, Americas</p><p class="paragraph_get">date :June 15, 2030 , <br> Visibility: Europe, Africa, Asia, Australia  </p><p class="paragraph_get"> date: December 9, 2030 , <br> Visibility: Americas, Europe, Africa, Asia      </p>'
          imgchnger1.style.backgroundImage = 'url("/asscets-page-3/min-totality.png")';
            imgchnger1.style.backgroundPosition = "center";
            imgchnger1.style.backgroundRepeat = "no-repeat";
            imgchnger1.style.backgroundSize = "cover";
        }   
    }, 2900);
    

})


conatiner_toatl_22.addEventListener('click', () =>{
    setTimeout(() => {
        loading_11.style.opacity = "1"
    }, 1);
} )

conatiner_toatl_22.addEventListener('click' ,() => {
    setTimeout(() => {
        if(conatiner_toatl_22){
            details_in_comiping1.innerHTML = '<p class="paragraph_get"> total Eclipes </p><p class="paragraph_get">date:March 14, 2025 , <br> Visibility: Pacific, Americas, Western Europe, Western Africa</p><p class="paragraph_get">date:September 7, 2025 , <br> Visibility: Europe, Africa, Asia, Australia</p><p class="paragraph_get">date:March 3, 2026 , <br>Visibility: Eastern Asia, Australia, Pacific, Americas</p><p class="paragraph_get">date:December 31, 2028 , <br>Visibility: Europe, Africa, Asia, Australia, Pacific</p><p class="paragraph_get">date:June 26, 2029 , <br>Visibility: Americas, Europe, Africa, Middle East</p><p class="paragraph_get">date:December 20, 2029, <br>Visibility: Visibility: Americas, Europe, Africa, Asia</p>'
            imgchnger1.style.backgroundImage = 'url("/asscets-toatl-5/c5.png")';
              imgchnger1.style.backgroundPosition = "center";
              imgchnger1.style.backgroundBlendMode = "overlay"
              imgchnger1.style.backgroundRepeat = "no-repeat";
              imgchnger1.style.backgroundSize = "cover";
        }
    }, 2900);
} )

conatiner_partical_33.addEventListener('click', () =>{
    setTimeout(() => {
        loading_11.style.opacity = "1"
    }, 1);
} )

conatiner_partical_33.addEventListener('click' ,() => {
    setTimeout(() => {
        if(conatiner_partical_33){
            details_in_comiping1.innerHTML = '<p class="paragraph_get"> partical Eclipes </p><p class="paragraph_get">date:September 18, 2024 , <br> Visibility:Americas, Europe, Africa</p>><p class="paragraph_get">date:August 28, 2026 , <br> Visibility:Eastern Pacific, Americas, Europe, Africa</p><p class="paragraph_get">date:January 12, 2028 , <br> Visibility: Americas, Europe, Africa</p><p class="paragraph_get">date:July 6, 2028 , <br> Visibility:Europe, Africa, Asia, Australia</p><p class="paragraph_get">date:June 15, 2030 , <br> Visibility:Europe, Africa, Asia, Australia</p>'
            imgchnger1.style.backgroundImage = 'url("/asscets-toatl-5/c6.png")';
              imgchnger1.style.backgroundPosition = "center";
              imgchnger1.style.backgroundBlendMode = "overlay"
              imgchnger1.style.backgroundRepeat = "no-repeat";
              imgchnger1.style.backgroundSize = "cover";
        }
    }, 2900);
} )

const neweclipes = new Date("2027-02-20T00:00:00Z");

const getmonths = document.getElementById("months");
const getdays = document.getElementById("days");
const gethours = document.getElementById("hours");
const getminutes = document.getElementById("minutes");
const getseconds = document.getElementById("seconds");

const settimer = setInterval(() => {
    const now = new Date();
    const newtimer = neweclipes - now 

    if(neweclipes <= 0 ){
        document.getElementById("countdown").textContent = "This the luner Eclipes"
        clearInterval(settimer)
    }else {
        const months = Math.floor(newtimer / (1000 * 60 * 60 * 24 * 30)); 
        const days = Math.floor((newtimer / (1000 * 60 * 60 * 24)) % 30); 
        const hours = Math.floor((newtimer / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((newtimer / (1000 * 60)) % 60); 
        const seconds = Math.floor((newtimer / 1000) % 60); 

        getmonths.textContent = `${months}`;
        getdays.textContent = `${days}`;
        gethours.textContent = `${hours}`;
        getminutes.textContent = `${minutes}`;
        getseconds.textContent = `${seconds}`;
    }
}, 1000);






  











// animations using the gsap



gsap.from(".navname_1",{
    y:-30,
    duration : 1.5,
    delay:1,
    autoAlpha :0,
    stragger:0.5

})
gsap.from(".conatner_for_the_nav",{
    y:-20,
    duration:1,
    delay:1,
    stragger:5,
    autoAlpha:0
})
gsap.from(".conatiner_pargarph_1_",{
    y:100,
    autoAlpha: 0,
   scrollTrigger : {
    trigger: ".conatiner_pargarph_1_",
    start: "top 60% ",
    end : " end 80%",
    scrub : 2,
   }
})


gsap.from(".lunner_heading_",{
    x:100,
    autoAlpha : 0,
    scrollTrigger : {
        trigger:".lunner_heading_",
        start :"top 80%",
        end: "end  60%",
        scrub: 2,
      
    }
})
gsap.from(".Total_heading_", {
    y:-50,
    autoAlpha: 0 ,
    scrollTrigger : {
        trigger: ".Total_heading_",
        start : "top 90%",
        end: "end  10%" ,
        scrub: true,
    }
})

gsap.from(".pratical_heading_",{
    x:-100,
    autoAlpha : 0,
    scrollTrigger : {
        trigger : ".pratical_heading_",
        scrub:2,
        start : "top 90%",
        end : " end  10%"
    }
})




// earth _



// left hand-side 
gsap.from(".container_moon_images_content_2",{
     x:100,
     autoAlpha:0,
     scrollTrigger: {
        trigger : ".container_moon_images_content_2",
        scrub: 2,
        start : "top 40%",
        end  : " end  10%",
     }
})
gsap.from(".container_moon_images_content_1",{
    x:100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".container_moon_images_content_1",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})
gsap.from(".container_moon_images_content_3",{
    autoAlpha:0,
    scale: 1.5,
    scrollTrigger: {
       trigger : ".container_moon_images_content_3",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})
gsap.from(".container_moon_images_content_4",{
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".container_moon_images_content_4",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})
gsap.from(".container_moon_images_content_5",{
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".container_moon_images_content_5",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})
gsap.from("#hover_h1_from_down",{
    y:100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : "#hover_h1_from_down",
       scrub: 2,
       ease: "power1 out",
       start : "top 100%",
       end  : " end  40%",
    }
})





// phases moon 


var moonmove = gsap.timeline()

moonmove.from("#move_red_moon_1",{
        scale: 0,
        autoAlpha: 0,
        scrollTrigger: {
            trigger : "#move_red_moon_1",
            scale: 1,
            autoAlpha:1,
            scale:1,
            scrub:2,
            start: "top 80%",
            end : "end 30%",
            duration:1 ,
            delay :1 ,
    
        }
    })

moonmove.from("#move_red_moon_2",{
        x:100,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_2",
            x:100,
            y:190,
            autoAlpha:1,
            scrub:2,
            ease:"power2 out",
            start: "top 80%",
            end : "end 30%",
        }
    })
    moonmove.from("#move_red_moon_3",{
        x:100,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_3",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 80%",
            end : "end 30%",
        }
    })
    moonmove.from("#move_red_moon_4",{
        x:100,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_4",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 80%",
            end : "end 30%",
        }
    })

    moonmove.from("#move_red_moon_5",{
        x:100,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_5",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 100%",
            end : "end 30%",
        }
    })
    moonmove.from("#move_red_moon_6",{
        x:-50,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_6",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 100%",
            end : "end 30%",
        }
    })
    moonmove.from("#move_red_moon_7",{
        x:-50,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_7",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 100%",
            end : "end 30%",
        }
    })
    moonmove.from("#move_red_moon_8",{
        x:-50,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_8",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 100%",
            end : "end 30%",
        }
    })

    moonmove.from("#move_red_moon_9",{
        x:-50,
        y:10,
        autoAlpha: 0,
        scrollTrigger:{
            trigger: "#move_red_moon_9",
            x:100,
            y:190,
            scrub:2,
            autoAlpha: 1,
            ease:"power2 out",
            start: "top 100%",
            end : "end 30%",
        }
    })
    

    gsap.from("#hover_h2_from_down",{
        y:100,
        autoAlpha:0,
        scrollTrigger: {
           trigger : "#hover_h2_from_down",
           scrub: 2,
           ease: "power1 out",
           start : "top 100%",
           end  : " end  40%",
        }
    })
    gsap.from("#hover_h3_from_down",{
        y:100,
        autoAlpha:0,
        scrollTrigger: {
           trigger : "#hover_h3_from_down",
           scrub: 2,
           ease: "power1 out",
           start : "top 100%",
           end  : " end  40%",
        }
    })

// animations - animation luner eclipes heading
    var luner_animation = gsap.timeline()
    luner_animation.from("#earth_luner_a1",{
        y:300,
        x:-100,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#hover_h3_from_down1",
            duration:1,
            delay:1,
            stragger:1,
            autoAlpha : 1,
            start : "top 100%",
            end : "end 20%",
            scrub :2,
            color: "white",
           
        }
    })

    // animations gallery 
    var gallary_animations = gsap.timeline()
    gallary_animations.from(".h1_luner_eclipes_gallary",{
       x:"-1000%",
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: ".conatiner_luner_eclipes_heading_galary",
            stragger:1,
            x:150,
            autoAlpha : 1,
            start : "-40%",
            end : "end 40%",
            scrub :2,
            ease:"power2 out",
            color: "white",
            pin:true,
           
        }
    })
    gallary_animations.from("#gallery_sun_anim_1",{
        x:"100%",
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#gallery_sun_anim_1",
            stragger:1,
            x:-150,
            autoAlpha : 1,
            start : "-60%",
            end : "end 40%",
            scrub :2,
            ease:"power2 out",
            color: "white",
            pin:true,
           
        }
    })
    gallary_animations.from("#gallery_earth_anim_1",{
        y:150,
        x:-200,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#gallery_earth_anim_1",
            stragger:1,
            y:-150,
            x:300,
            autoAlpha : 1,
            start : "-60%",
            end : "end 40%",
            scrub :4,
            ease:"power2 out",
            color: "white",
            pin:true,
           
        }
    })
    gallary_animations.from("#gallery_moon_anim_1",{
        x:"100%", 
        
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#gallery_moon_anim_1",
            stragger:1,
            x:-350,
            autoAlpha : 1,
            start : "-100%",
            end : "end 40%",
            scrub :4,
            ease:"power2 out",
            color: "white",
            pin:true,
           
        }
    })





    // 

    luner_animation.from("#earth_luner_a2",{
        y:-100,
        x:-150,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#earth_luner_a2",
            duration:1,
            delay:1,
            stragger:1,
            autoAlpha : 1,
            start : "top 100%",
            end : "end 20%",
            scrub :2,
            color: "white",
           
        }
    })
    luner_animation.from("#earth_luner_a3",{
        y:300,
        x:400,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#earth_luner_a2",
            duration:1,
            delay:1,
            stragger:1,
            autoAlpha : 1,
            start : "top 100%",
            end : "end 20%",
            scrub :2,
            color: "white",
           
        }
    })
   
    luner_animation.from("#hover_h3_from_down1",{
        y:300,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#hover_h3_from_down1",
            duration:1,
            delay:1,
            stragger:1,
            autoAlpha : 1,
            start : "top 100%",
            end : "end 20%",
            scrub :2,
            color: "white",
           
        }
    })
    
    luner_animation.from("#hover_h3_from_down2",{
        y:300,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#hover_h3_from_down2",
            stragger:1,
            autoAlpha : 1,
            start : "top 170%",
            end : "end 10%",
            scrub :2,
            color: "white",
            
        }
    })

    
    luner_animation.from("#hover_h3_from_down3",{
        y:300,
        autoAlpha : 0 ,
        scrollTrigger:{
            trigger: "#hover_h3_from_down3",
            stragger:1,
            start : "top 170%",
            end : "end 20%",
            autoAlpha : 1,
            scrub :2,
            color: "black",
        }
    })


 

   gsap.from("#heading_toal_landing_page_an_id" ,{
        autoAlpha:0,
        y:-400,
        scrollTrigger: {
            trigger : "#heading_toal_landing_page_an_id",
            scrub:1,
            autoAlpha:1,
            start:" 70%",
            y:1000,
        }
    });
    
    gsap.from("#page_1_total_animations",{
        y:500,
        scrollTrigger:{
            trigger: "#page_1_total_animations",
            scrub:1,
           start: " 110%",
           end : "end 40%",    
        }
    })
    gsap.from("#page_2_total_animations",{
        y:-600,
        scrollTrigger:{
            trigger: "#page_1_total_animations",
            scrub:1,
            y:200,
            start: " 142%",
            end : "end -10%",
            
           
         
        }
    })
    gsap.from("#page_3_total_animations",{
        scale:0,
        scrollTrigger:{
            trigger: "#page_3_total_animations",
            scrub:1,
            start: " 190%",
            end : " 10%",
        }
    })
    gsap.from("#page_4_total_animations",{
        y:500,
        scrollTrigger:{
            trigger: "#page_4_total_animations",
            scrub:1,
            start: " 130%",
            end : " 10%",
        }
    })
    gsap.from("#page_5_total_animations",{
        y:-200,
        opacity : 0,
        scrollTrigger:{
            trigger: "#page_5_total_animations",
            scrub:2,
            start: " 70%",
            end : " 10%",
            opacity:1,

        }
    })
    gsap.from("#page_sun_total_animations",{
        x:-600,
        opacity : 0,
        scrollTrigger:{
            trigger: "#page_5_total_animations",
            scrub:2,
            start: " 70%",
            end : " 10%",
            opacity:1,

        }
    })
    gsap.from("#page_earth_total_animations",{
        x:600,
        opacity : 0,
        scrollTrigger:{
            trigger: "#page_earth_total_animations",
            scrub:2,
            start: " 70%",
            end : " 10%",
            opacity:1,
         

        }
    })



    
    gsap.from("#sun_animation_page_2", {
        y: 600,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: "#sun_animation_page_2",
            scrub: 3,
            stagger: 1,  
            start: "top 90%",  
            end: "top 40%",  
            autoAlpha:1,
        
        },
       
    });
    gsap.from("#animations_letter_1" , {
        y:-200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animations_letter_1",
            scrub :3,
            start : "top 10%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animations_letter_2" , {
        y:200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animations_letter_2",
            scrub :3,
            start : "top 50%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animations_letter_3" , {
        y:-200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animations_letter_3",
            scrub :3,
            start : "top 10%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animations_letter_4" , {
        y:200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animations_letter_4",
            scrub :3,
            start : "top 50%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animations_letter_5" , {
        y:-200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animations_letter_5",
            scrub :3,
            start : "top 10%",
            end : "end 50%",
            autoAlpha:1,

        }
    })

    gsap.from("#animation_center_img_moon_page_2" , {
        y:-200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animation_center_img_moon_page_2",
            scrub :3,
            start : "top 60%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animation_left_img_moon_page_2" , {
        x:-200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animation_left_img_moon_page_2",
            scrub :3,
            start : "top 60%",
            end : "end 50%",
            autoAlpha:1,

        }
    })
    gsap.from("#animation_right_img_moon_page_2" , {
        x:200,
       
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animation_right_img_moon_page_2",
            scrub :3,
            start : "top 60%",
            end : "end 50%",
            autoAlpha:1,
            

        }
    })
 
    
    gsap.from("#animation_content_page_2" , {
        y:200,
        autoAlpha:0,
        scrollTrigger: {
            trigger : "#animation_content_page_2",
            scrub :3,
            start : "top 160%",
            end : "end 50%",
            autoAlpha:1,

        }
    })


 

    // page_3


   gsap.from(".heading_conatiner_p3",{
        x:-100,
        autoAlpha:0,
        scrollTrigger:{
            trigger: ".heading_conatiner_p3",
            start:"top 90%",
            end : "+=700",
            autoAlpha:1,
                        scrub: 2,
            
        }
   })


gsap.from(".conatiner_img_1_p3_center_",{
    y: -100 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_1_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        // 
        
    }
})
gsap.from(".conatiner_img_2_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_2_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})

gsap.from(".conatiner_img_3_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_3_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_4_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_4_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_5_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_5_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_sun_1_inside",{
    x: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_sun_1_inside",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_6_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_6_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_7_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_7_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_8_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_8_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".conatiner_img_9_p3_center_",{
    y: -400 ,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".conatiner_img_9_p3_center_",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})



// heading pre 

gsap.from(".heading_p1_1" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_1",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_1_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_1_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_2" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_2",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_2_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_2_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_3" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_3",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_3_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_3_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_4" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_4",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_4_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_4_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_5" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_5",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_5_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_5_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_6" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_6",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_6_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_6_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_7" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_7",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_7_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_7_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_8" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_8",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_8_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_8_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_9" , {
    x:-100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_9",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p1_9_pre" , {
    y:100,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p1_9_pre",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})





// sun - bloacking - moon 

gsap.from(".heading_p4_1",{
    x:-10,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p4_1",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})
gsap.from(".heading_p4_2",{
    x:-50,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p4_2",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})

gsap.from(".heading_p4_3",{
    x:-200,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p4_3",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})

gsap.from(".heading_p4_4",{
    x:-300,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p4_4",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})

gsap.from(".heading_p4_5",{
    x:-400,
    autoAlpha: 0,
    scrollTrigger:{
        trigger: ".heading_p4_5",
        start : "top 50%",
        autoAlpha: 1,
        end: " +=400",
        scrub : 2,
        
        
    }
})


// sun -animations
gsap.from(".coantiner_sun_img_p4", {
    x:600,
    scrollTrigger : {
        trigger : ".coantiner_sun_img_p4",
        start : "top 50% ",
        end :" +=500%",
        scrub: 2,
       
    }
})

gsap.from(".content_box_paragraph_p4" , {
    y:200,
    autoAlpha :0,
    stragger : 2 , 
    scrollTrigger : {
        trigger : ".content_box_paragraph_p4",
        start : "Top 100%",
        end : " +=400" ,
        autoAlpha: 1,
        scrub:3,
        
    }
})



// p5 total eclipes

const top_box_1 = document.getElementById("top_deatils_p5_1");
const top_overlay_1 = document.getElementById("top_details_p5_overlay_1");
const heading_overly_1 = document.getElementById("heading_overlay_1_")
const paragraph_overlay_1_1 = document.getElementById("paragraph_overlay_1_")

top_box_1.addEventListener('mouseenter', () => {
    heading_overly_1.style.opacity ="1"
    top_overlay_1.style.opacity ="1"
    paragraph_overlay_1_1.style.opacity = "1"
    top_overlay_1.style.background = " rgba(255, 255, 255, 0.116)";
    heading_overly_1.style.transitionDuration = "1s"
    heading_overly_1.style.transitionDelay = "1s"
    heading_overly_1.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_1_1.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_1_1.style.transitionDelay= "1s"
    paragraph_overlay_1_1.style.transitionDuration = "1s"

});
top_box_1.addEventListener('mouseleave', () => {
    top_overlay_1.style.opacity ="0"
   
});

top_box_1.style.backgroundImage = 'url("/totallandingpage/moon-showcase/first.png")';
top_box_1.style.backgroundPosition = "center";
top_box_1.style.backgroundRepeat = "no-repeat";
top_box_1.style.backgroundSize = "cover";
   

  


// box-2 top 
const top_box_2 = document.getElementById("top_deatils_p5_2")
const top_overlay_2 = document.getElementById("top_details_p5_overlay_2");
const heading_overly_2 = document.getElementById("heading_overlay_2_")
const paragraph_overlay_2_2 = document.getElementById("paragraph_overlay_2_")



top_box_2.addEventListener('mouseenter', () => {
    heading_overly_2.style.opacity ="1"
    heading_overly_2.style.transitionDuration = "1s"
    heading_overly_2.style.transitionDelay = "1s"
    heading_overly_2.style.transitionTimingFunction = "ease-in-out"
    top_overlay_2.style.opacity ="1"
    top_overlay_2.style.background = " rgba(255, 255, 255, 0.116)";
    paragraph_overlay_2_2.style.opacity = "1"
    paragraph_overlay_2_2.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_2_2.style.transitionDelay= "1s"
    paragraph_overlay_2_2.style.transitionDuration = "1s"

});
top_box_2.addEventListener('mouseleave', () => {
    top_overlay_2.style.opacity ="0"
   
});

top_box_2.style.backgroundImage = 'url("/totallandingpage/moon-showcase/sec.png")';
top_box_2.style.backgroundPosition = "center";
top_box_2.style.backgroundRepeat = "no-repeat";
top_box_2.style.backgroundSize = "cover";
   


// top - 3  box 
const top_box_3 = document.getElementById("top_deatils_p5_3")
const top_overlay_3 = document.getElementById("top_details_p5_overlay_3");
const heading_overly_3 = document.getElementById("heading_overlay_3_")
const paragraph_overlay_3_3 = document.getElementById("paragraph_overlay_3_")



top_box_3.addEventListener('mouseenter', () => {
    heading_overly_3.style.opacity ="1"
    heading_overly_3.style.transitionDuration = "1s"
    heading_overly_3.style.transitionDelay = "1s"
    heading_overly_3.style.transitionTimingFunction = "ease-in-out"
    top_overlay_3.style.opacity ="1"
    top_overlay_3.style.background = " rgba(255, 255, 255, 0.116)";
    paragraph_overlay_3_3.style.opacity = "1"
    paragraph_overlay_3_3.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_3_3.style.transitionDelay= "1s"
    paragraph_overlay_3_3.style.transitionDuration = "1s"

});
top_box_3.addEventListener('mouseleave', () => {
    top_overlay_3.style.opacity ="0"
   
});

top_box_3.style.backgroundImage = 'url("/totallandingpage/moon-showcase/thir.png")';
top_box_3.style.backgroundPosition = "center";
top_box_3.style.backgroundRepeat = "no-repeat";
top_box_3.style.backgroundSize = "cover";
   



// down - box - 1 
const top_box_down_3 = document.getElementById("conatiner_down_details_p5_1")
const top_overlay_down_3 = document.getElementById("top_details_p5_overlay_down_1");
const heading_overly_down_3 = document.getElementById("heading_overlay_down_1_")
const paragraph_overlay_down_3_3 = document.getElementById("paragraph_overlay_down_1_")



top_box_down_3.addEventListener('mouseenter', () => {
    heading_overly_down_3.style.opacity ="1"
    heading_overly_down_3.style.transitionDuration = "1s"
    heading_overly_down_3.style.transitionDelay = "1s"
    heading_overly_down_3.style.transitionTimingFunction = "ease-in-out"
    top_overlay_down_3.style.opacity ="1"
    top_overlay_down_3.style.background = " rgba(255, 255, 255, 0.116)";
    paragraph_overlay_down_3_3.style.opacity = "1"
    paragraph_overlay_down_3_3.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_down_3_3.style.transitionDelay= "1s"
    paragraph_overlay_down_3_3.style.transitionDuration = "1s"

});
top_box_down_3.addEventListener('mouseleave', () => {
    top_overlay_down_3.style.opacity ="0"
   
});

top_box_down_3.style.backgroundImage = 'url("/totallandingpage/moon-showcase/center-bg-p5.png")';
top_box_down_3.style.backgroundPosition = "center";
top_box_down_3.style.backgroundRepeat = "no-repeat";
top_box_down_3.style.backgroundSize = "cover";
   


// down - 2  - -- - -- - - - - - - - -- - - -  -- - - - - 

const top_box_down_4 = document.getElementById("conatiner_down_details_p5_2")
const top_overlay_down_4 = document.getElementById("top_details_p5_overlay_down_2");
const heading_overly_down_4 = document.getElementById("heading_overlay_down_2_")
const paragraph_overlay_down_4_4 = document.getElementById("paragraph_overlay_down_2_")



top_box_down_4.addEventListener('mouseenter', () => {
    heading_overly_down_4.style.opacity ="1"
    heading_overly_down_4.style.transitionDuration = "1s"
    heading_overly_down_4.style.transitionDelay = "1s"
    heading_overly_down_4.style.transitionTimingFunction = "ease-in-out"
    top_overlay_down_4.style.opacity ="1"
    top_overlay_down_4.style.background = " rgba(255, 255, 255, 0.116)";
    paragraph_overlay_down_4_4.style.opacity = "1"
    paragraph_overlay_down_4_4.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_down_4_4.style.transitionDelay= "1s"
    paragraph_overlay_down_4_4.style.transitionDuration = "1s"

});
top_box_down_4.addEventListener('mouseleave', () => {
    top_overlay_down_4.style.opacity ="0"
   
});

top_box_down_4.style.backgroundImage = 'url("/totallandingpage/moon-showcase/fou.png")';
top_box_down_4.style.backgroundPosition = "center";
top_box_down_4.style.backgroundRepeat = "no-repeat";
top_box_down_4.style.backgroundSize = "cover";






const top_box_down_5 = document.getElementById("conatiner_down_details_p5_3")
const top_overlay_down_5 = document.getElementById("top_details_p5_overlay_down_3");
const heading_overly_down_5 = document.getElementById("heading_overlay_down_3_")
const paragraph_overlay_down_5_5 = document.getElementById("paragraph_overlay_down_3_")



top_box_down_5.addEventListener('mouseenter', () => {
    heading_overly_down_5.style.opacity ="1"
    heading_overly_down_5.style.transitionDuration = "1s"
    heading_overly_down_5.style.transitionDelay = "1s"
    heading_overly_down_5.style.transitionTimingFunction = "ease-in-out"
    top_overlay_down_5.style.opacity ="1"
    top_overlay_down_5.style.background = " rgba(255, 255, 255, 0.116)";
    paragraph_overlay_down_5_5.style.opacity = "1"
    paragraph_overlay_down_5_5.style.transitionTimingFunction = "ease-in-out"
    paragraph_overlay_down_5_5.style.transitionDelay= "1s"
    paragraph_overlay_down_5_5.style.transitionDuration = "1s"

});
top_box_down_5.addEventListener('mouseleave', () => {
    top_overlay_down_5.style.opacity ="0"
   
});

top_box_down_5.style.backgroundImage = 'url("/totallandingpage/moon-showcase/five.png")';
top_box_down_5.style.backgroundPosition = "center";
top_box_down_5.style.backgroundRepeat = "no-repeat";
top_box_down_5.style.backgroundSize = "cover";




// top boxs
gsap.from(".conatiner_top_details_1",{
    x:100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".conatiner_top_details_1",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})


gsap.from(".conatiner_top_details_2",{
    x:100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".conatiner_top_details_2",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
 })
 gsap.from(".conatiner_top_details_3",{
    autoAlpha:0,
    x:100,
    scrollTrigger: {
       trigger : ".conatiner_top_details_3",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
 })

//  down boxs
gsap.from(".conatiner_down_details_1",{
    autoAlpha:0,
    x:-100,
    scrollTrigger: {
       trigger : ".conatiner_down_details_1",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
 })


gsap.from(".conatiner_down_details_2",{
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".conatiner_down_details_2",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
})


gsap.from(".conatiner_down_details_3",{
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".conatiner_down_details_3",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
 })

 


 gsap.from(".heading_content_p5",{
    y:100,
    autoAlpha:0,
    scrollTrigger: {
       trigger : ".heading_content_p5",
       scrub: 2,
       start : "top 40%",
       end  : " end  10%",
    }
 })


//  moon visiablity

gsap.from(".h1_details_h1" ,{
    y:-190,
    stragger : 2 , 

    autoAlpha : 0,
    scrollTrigger : {
        trigger : ".heading_details_lu_pa_to",
        autoAlpha:1,
        scrub: 2,
        strat : "top 10%",
        end : "+=500"
    } 
})
gsap.from(".paragraph_p1" ,{
    y:190,
    autoAlpha : 0,
    scrollTrigger : {
        trigger : ".paragraph_lu_pa_to",
        autoAlpha:1,
        scrub: 4,
        strat : "top 10%",
        end : "+=500"
    } 
})