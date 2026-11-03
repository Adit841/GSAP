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