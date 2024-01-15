import { useInView } from "framer-motion";
import React, {useRef} from "react";

// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.fade-out');
// hiddenElements.forEach(el => observer.observe(el));

function DivLeft({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="left-about" ref={ref} style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}>
          {children}
      </div>
    );
  }

  function DivRight({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="right-about" ref={ref} style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}>
          {children}
      </div>
    );
  }

function About(){

   return (
    <section className="section about">
    <DivLeft className="left-about">
        <h2 className="title">Hey! I'm Dave.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lobortis lacus, ut dignissim nisl. Nulla semper dolor et venenatis pretium. Mauris posuere vel risus at iaculis. Vivamus massa nunc, pretium ut tincidunt in, interdum in velit. Pellentesque quis tincidunt dolor. Aliquam auctor, nunc et varius convallis, elit sapien suscipit libero, sed aliquam tortor lorem nec velit. Ut luctus, dui in malesuada lacinia, sapien ex lobortis dui, ac hendrerit odio urna blandit ex. Vestibulum ac augue condimentum, suscipit quam sit amet, rhoncus justo. Curabitur pulvinar semper risus. Sed nec interdum ante. Duis at risus ante. Donec dignissim a elit et consectetur. Integer feugiat est a consectetur tempor. Duis facilisis augue id lorem efficitur mollis.

Morbi dignissim faucibus dolor vel tincidunt. Cras cursus lorem nisl, id condimentum augue tincidunt ut. Phasellus et porttitor libero. Pellentesque maximus consectetur est at blandit. Aliquam ullamcorper lorem non nisl tempor dapibus. Donec justo neque, molestie et orci tincidunt, condimentum laoreet sapien. Donec sollicitudin nibh sit amet lobortis tempor. Donec blandit a purus vel porttitor. Sed a metus efficitur, volutpat lectus et, faucibus ipsum. Mauris velit lacus, mattis eu ligula quis, ullamcorper porttitor orci. Nullam augue tortor, euismod vel orci sit amet, tristique vulputate felis. Aliquam mattis lacus at erat consequat finibus. Nulla faucibus enim pulvinar pharetra vehicula. Integer ac metus finibus, vulputate diam vitae, euismod nulla. Donec vestibulum, leo vel commodo volutpat, sem enim blandit ligula, vel aliquet dolor dolor eu nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </DivLeft>
    <DivRight className="right-about">
        <p>Image will go here</p>
    </DivRight> 
  </section>)
}

export default About;