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


// const counter  = {value:0};
// gsap.to("cunter", {
//   value:500,
//   duration:3,
//   onUpdate: () => console.log(Math.round(counter.value))
// })


// document.querySelectorAll(".btn").forEach(btn => {
//   btn.addEventListener("mouseenter",() => {
//     gsap.to(btn, {
//       scale:1.1,
//       duration:0.5,
//       ease:"back.out(2)"
//     });
//     gsap.to(".btn--scale", {
//       backgroundColor: "red", color: "blue",fontSize: "20px",duration:1.3, ease:"back.out(2)"
//     });

//   });
//   btn.addEventListener("mouseleave",() => {
//     gsap.to(btn, {
//       scale:1,
//       duration:0.5,
//       ease:"back.in(2)"
//     });
//     gsap.to(".btn--scale", {
//       backgroundColor: "white",
//       color: "black",
//       fontSize: "16px",
//       duration:1.3, 
//       ease:"back.out(2)"
//     });
//   });
// })


// gsap.to(".box", {
//   x:400,
//   duration:1.5,
//   delay:0.3,
  
//   stagger:{
//     each:0.5,
//     from:"center",
//     grid:"auto",
//     ease:"power3.out",
//   }
// })

// const tl = gsap.timeline({
//   paused:true,
// });

// tl.to(".box1", {
//   x:500,
//   duration:1.5,
//   ease:"power3.out",
// }).to(".box2", {
//   x:500,
//   duration:1.5,
//   ease:"power3.out",
// }).to(".box3", {
//   x:500,
//   duration:1.5,
//   ease:"power3.out",
// }).to(".box4", {
//   x:500,
//   duration:1.5,
//   ease:"power3.out",
// });
// tl.to(".box1", { x: 100 })
//   .to(".box2", { x: 100 }, "-=0.3")   // start 0.3s before the previous tween ends (overlap)
//   .to(".box3", { x: 100 }, "+=0.2")   // start 0.2s after the previous tween ends (gap)
//   .to(".box4", { x: 100 }, 0)         // start at the absolute 0-second mark of the timeline
//   .to(".box5", { x: 100 }, "<")       // start at the same time as the previous tween started
//   .to(".box6", { x: 100 }, "myLabel"); // start at a named label


//   setTimeout(() => {

//     tl.play();
//     tl.pause();
//     tl.reverse();
//     tl.restart();
//     tl.seek(0.5);        // jump to 0.5 seconds
//     tl.progress(0.5);     // jump to 50% progress
//     tl.timeScale(2);      // play at 2x speed
//     tl.timeScale(0.5);    // play at half speed
//   }, 1000);

  

// gsap.to(".box", {
//   x: 300,
//   onStart: () => console.log("started"),
//   onUpdate: () => console.log("every frame"),
//   onComplete: () => console.log("done"),
//   onRepeat: () => console.log("looped again")
// });


// const obj = {
//   value:0,
// };


// const counter = document.querySelector(".loader-count h1");


// gsap.to(obj, {
//   value:100,
//   duration:5,
//   ease:"none",
//   onUpdate: () =>{
//     counter.textContent = `${Math.round(obj.value)}%`;
//   },
//   onComplete: () =>{
//     counter.textContent = "100%";
//   }
// })





gsap.to(".box", {
  x:400,
  duration:1.5,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".box", 
  }
})