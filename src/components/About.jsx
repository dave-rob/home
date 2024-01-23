import { useInView } from "framer-motion";
import React, {useRef} from "react";

function DivLeft({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="left-about" ref={ref} style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        overflow: "hidden"
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
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        overflow: "hidden"
      }}>
          {children}
      </div>
    );
  }

function About(){

   return (
    <section className="section about" id="aboutme">
    <DivLeft>
        <h2 className="title">Hey! I'm Dave.</h2>
        <p>I'm a Full-Stack Engineer. I enjoy coding and seeing it come alive visually on a website. I started coding about 10 years ago, but took a break when I joined the military. I enjoyed my time in the military but now I am coding again since I missed it. When I'm not in front of a computer you will find me lifting weights, training for my next race, snowboarding, hiking, and always seeking new adventures and experiences. Values like hardwork, dedication, and persistence guide both my personal and professional life. Currently, I am tightening up my skills as a Software Engineer and training for a marathon.  </p>
    </DivLeft>
    <DivRight>
        <img className= "right-about" src= "me.jpg"></img>
    </DivRight> 
  </section>)
}

export default About;