import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Draggable);


// gsap.to(".box", {
//   x: 400,        
//   rotation: 720, 
//   duration: 3, 
//   ease: "bounce.out"
// });

// gsap.from(".box", {
//   x: 400,        
//   rotation: 720, 
//   duration: 3, 
//   ease: "bounce.out"
// });

gsap.fromTo(".box", {
  x:200,
  rotation:360,
  duration:1,
  opacity:0,
  scale:0.5,
},{
  x:400,
  rotation:360,
  opacity:1,
  scale:1
})


const counter  = {value:0};
gsap.to("cunter", {
  value:500,
  duration:3,
  onUpdate: () => console.log(Math.round(counter.value))
})


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter",() => {
    gsap.to(btn, {
      scale:1.1,
      duration:0.5,
      ease:"back.out(2)"
    });
    gsap.to(".btn--scale", {
      backgroundColor: "red", color: "blue",fontSize: "20px",duration:1.3, ease:"back.out(2)"
    });

  });
  btn.addEventListener("mouseleave",() => {
    gsap.to(btn, {
      scale:1,
      duration:0.5,
      ease:"back.in(2)"
    });
    gsap.to(".btn--scale", {
      backgroundColor: "white",
      color: "black",
      fontSize: "16px",
      duration:1.3, 
      ease:"back.out(2)"
    });
  });
})

