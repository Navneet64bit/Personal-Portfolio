var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x-10+"px"
//     crsr.style.top = dets.y-10+"px"
//     blur.style.left = dets.x-90+"px"
//     blur.style.top = dets.y-90+"px"

// })
document.querySelectorAll("#navr h4")


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"80px",
    scrollTrigger:
    {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -14%",
        scrub:1,
        toggleActions:"play none none reverse"
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -50%",
        end:"top -100%",
        scrub:3
    }
})

gsap.from(".projects,.linkedin-button",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".right-section",
        scroller:"body",
        start:"top 30%",
        end:"top 35%",
        scrub:3
    }
})

gsap.from(".education-container",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".education-section",
        scroller:"body",
        start:"top 30%",
        end:"top 35%",
        scrub:3
    }
})

gsap.from("#cards-container",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".projects-heading-front",
        scroller:"body",
        start:"top 30%",
        end:"top 35%",
        scrub:3
    }
})

