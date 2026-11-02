import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Draggable);


gsap.to(".box", {
  x: 300,        // move 300px right
  rotation: 360, // spin a full turn
  duration: 2, 
  delay: 2,  // over 2 seconds
  ease: "power2.out"
});