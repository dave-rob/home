import { useInView } from "framer-motion";
import React, {useRef} from "react";

export default function Portfolio(){
    return (
        <section className = 'section' id="portfolio" style={{backgroundColor: "blue"}}>
    <h1 className="portfolio">Some recent projects</h1>
    <div className="portfolio-right">
      <div className="project-image">
        <img className="work-feature-block-image" src="https://placehold.it/600x400"/>
      </div>
      <div className="project-info">
        <h2 className="project-title">Project Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
        <h2>Project Details</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>

    <div className="portfolio-left">
      <div className="project-info">
        <h2 className="project-title">Project Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
        <h2>Project Details</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
      
      <div className="project-image">
        <img className="work-feature-block-image" src="https://placehold.it/600x400"/>
      </div>
    </div>

    <div className = "test">
        <h2 className= "title">skills</h2>
    </div>
    </section>
    )
}