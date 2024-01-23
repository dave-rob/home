import { useInView, motion, useScroll, useTransform  } from "framer-motion";
import React, {useRef} from "react";

let display = '';
let size ='';

function DivLeft({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="portfolio-left content" ref={ref} style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      display:display,
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
    <div className="portfolio-right content" ref={ref} style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      display: display,
      overflow: 'hidden',
      
    }}>
        {children}
    </div>
  );
}

function DivRightMobile({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="portfolio-right content" ref={ref} style={{
      transform: isInView ? "none" : "translateX(50px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      display: display,
      overflow: 'hidden',
      paddingRight:"2em"
    }}>
        {children}
    </div>
  );
}

function DivLeftMobile({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="portfolio-left content" ref={ref} style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      display:display,
      overflow: "hidden",
      paddingLeft: "2em",
      marginLeft: "-50px",
    }}>
        {children}
    </div>
  );
}

function DesktopPortfolio(){
  return (<section className = 'section' id="portfolio" >
  <h1 className="portfolio">Some recent projects</h1>
  <DivRight>
    <div className="project-image">
      <img className="image"src="rizzler.png"/>
    </div>
    <div className="project-info" style={{fontSize: size}}>
    <a href="https://rizzler-4cdx.onrender.com/" target="next"><h2 className="project-title">Rizzler</h2></a>
      <p>Introducing Rizzler, the classy dating app designed for individuals who appreciate sophistication in their quest for meaningful connections. Swipe left or right to discover like-minded singles who share your interests and values. With our sleek and intuitive interface, finding your match has never been this effortless.</p>
      <h2>Project Details</h2>
      <ul>
        <li><strong>Classy Interface:</strong> Our app boasts a refined design, creating an elevated dating experience for users who appreciate sophistication.</li>
        <li><strong>Swipe Functionality:</strong> Effortlessly navigate through profiles with a simple left or right swipe. It's a fun and efficient way to discover potential matches.</li>
        <li><strong>Messaging Platform:</strong> Break the ice and start engaging conversations with your matches. If you don't know how to break the ice, their is a generator to help you out.</li>
      </ul>
    </div>
  </DivRight>

  <DivLeft>
    <div className="project-info" style={{fontSize: size}}>
    <a href="https://stevesnotebook.surge.sh/" target="next1"><h2 className="project-title">Steve's Notebook</h2></a>
      <p>Introducing Steve's Notebook, the innovative grid painting app that turns your creativity into a masterpiece. This is sure to bring you back to your childhood of watching Blues Clues. Embrace the art of precision and design with our unique grid-based canvas, providing a structured and visually appealing platform for your artistic expression.</p>
      <h2>Project Details</h2>
      <ul>
        <li><strong>Grid Canvas:</strong> Explore the world of organized creativity with our grid-based canvas. Perfect for creating intricate designs, pixel art, and structured paintings with ease.</li>
        <li><strong>Precision Painting: </strong>Take your artwork to the next level by painting within each grid cell. Achieve a level of precision and detail that's unmatched, allowing you to bring your visions to life with accuracy.</li>
        <li><strong>Versatile Tools: </strong>Unleash your creativity using a variety of versatile tools, including brushes, colors, and fill tools. Customize your artistic experience to suit your unique style and preferences.</li>
      </ul>
    </div>
    
    <div className="project-image">
      <img className="image" src="stevesNotebook.png"/>
    </div>
  </DivLeft>

  {/* <div className = "test">
      <h2 className= "title">skills</h2>
  </div> */}
  </section>)
}

function MobilePortfolio(){
  return (<section className = 'section' id="portfolio" >
  <h1 className="portfolio">Some recent projects</h1>
  <DivRightMobile>
    
    <div className="project-info" style={{fontSize: size, width: "100%"}}>
      <a href="https://rizzler-4cdx.onrender.com/" target="next"><h2 className="project-title">Rizzler</h2></a>
      <p>Introducing Rizzler, the classy dating app designed for individuals who appreciate sophistication in their quest for meaningful connections. Swipe left or right to discover like-minded singles who share your interests and values. With our sleek and intuitive interface, finding your match has never been this effortless.</p>
      <h2>Project Details</h2>
      <ul>
        <li><strong>Classy Interface:</strong> Our app boasts a refined design, creating an elevated dating experience for users who appreciate sophistication.</li>
        <li><strong>Swipe Functionality:</strong> Effortlessly navigate through profiles with a simple left or right swipe. It's a fun and efficient way to discover potential matches.</li>
        <li><strong>Messaging Platform:</strong> Break the ice and start engaging conversations with your matches. If you don't know how to break the ice, their is a generator to help you out.</li>
      </ul>
    </div>
    <div className="project-image" style={{margin:"auto", paddingBottom: "10px"}}>
      <img className="image"src="rizzler.png"/>
    </div>
  </DivRightMobile>

  <DivLeftMobile>
    <div className="project-info" style={{fontSize: size,  width: "100%"}}>
    <a href="https://stevesnotebook.surge.sh/" target="next1"><h2 className="project-title">Steve's Notebook</h2></a>
      <p>Introducing Steve's Notebook, the innovative grid painting app that turns your creativity into a masterpiece. This is sure to bring you back to your childhood of watching Blues Clues. Embrace the art of precision and design with our unique grid-based canvas, providing a structured and visually appealing platform for your artistic expression.</p>
      <h2>Project Details</h2>
      <ul>
        <li><strong>Grid Canvas:</strong> Explore the world of organized creativity with our grid-based canvas. Perfect for creating intricate designs, pixel art, and structured paintings with ease.</li>
        <li><strong>Precision Painting: </strong>Take your artwork to the next level by painting within each grid cell. Achieve a level of precision and detail that's unmatched, allowing you to bring your visions to life with accuracy.</li>
        <li><strong>Versatile Tools: </strong>Unleash your creativity using a variety of versatile tools, including brushes, colors, and fill tools. Customize your artistic experience to suit your unique style and preferences.</li>
      </ul>
    </div>
    
    <div className="project-image" style={{margin:"auto", paddingBottom: "10px"}}>
      <img className="image" src="stevesNotebook.png"/>
    </div>
  </DivLeftMobile>

  {/* <div className = "test">
      <h2 className= "title">skills</h2>
  </div> */}
  </section>)
}

export default function Portfolio(){
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0,1], ['0%', '300%']);

  const [width, setWidth] = React.useState(window.innerWidth);
  
  const breakpoint= 1300;
  const imgBreakpoint=920; 
  const mobileBreakpoint = 600;

  React.useEffect(()=> {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  

  
  if (width < mobileBreakpoint){
  size= '.5em'
  display = 'block'
  } else if (width < imgBreakpoint){
    size= '0.75em'
    display='block'
  } 
  else if (width < breakpoint){
  size = '0.75em';
  display = 'flex';
  } else {
  size = '1em';
  display = 'flex';
  }

    return width >imgBreakpoint ? <DesktopPortfolio /> : <MobilePortfolio />
}