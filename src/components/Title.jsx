import { motion, useScroll, useTransform } from "framer-motion";
import React, {useRef } from "react";

export default function Title(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0,1], ['0%', '300%']);

    const [width, setWidth] = React.useState(window.innerWidth);
    
    const breakpoint= 920;
    const mobileBreakpoint = 775;

    React.useEffect(()=> {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);


    let size ='';
    
    if (width < mobileBreakpoint){
    size= '1.5em'
    } else if (width < breakpoint){
    size = '2.5em';
    } else {
    size = '3em';
    }
   
    return (
        <div className="intro">
            <motion.h1 className="title"style={{y: textY, fontSize: size}}>Full-Stack Developer & Fitness Enthusiast</motion.h1>
            <motion.div className="background" style={{
                backgroundImage: "url(background.png)",
                zIndex: '-5',
                y: backgroundY,
            }} />
            <motion.div  className="background" style={{
                backgroundImage: "url(watermark-cover.png)",
                zIndex: '-4',
                y: backgroundY,
            }} />
            <div className="background" style={{
                backgroundImage: "url(hiker.png)",
                zIndex: '20',
            }} />
        </div> 
    )
}