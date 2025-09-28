/*import ListComponent from "../components/ListComponent";
import photo10 from '../assets/logo.svg';
import photo11 from '../assets/logo.svg';
import photo12 from '../assets/logo.svg';

const data = [
     { 
          imagePath: photo10, 
          title: 'Title 01',
          text: 'This is the first item'
     },
     { imagePath: photo11, title: 'Title 02', text: 'This is the second item' },
     { imagePath: photo12, title: 'Title 03', text: 'This is the third item' },
]

function Projects(){
    return(
        <div>
            <h3>Projects</h3>
            <ListComponent items={data}/>
        </div>
    );
}

export default Projects;*/

import ListComponent from "../components/ListComponent";
import spiceSafariImg from "../assets/spice-safari.ico";
import weatherDBImg from "../assets/weatherDb.png";
import ggFitnessImg from "../assets/GGfitness.png";

const data = [
  { 
    imagePath: spiceSafariImg, 
    title: "Spice Safari - Recipe Website",
    text: "A fully responsive 5-page recipe website built with HTML and CSS, optimized for mobile, tablet, and desktop devices."
  },
  { 
    imagePath: weatherDBImg, 
    title: "Weather Database System (Group Project)",
    text: "Collaborated with teammates to design and implement a weather data management system using SQL for storing and querying data." 
  },
  { 
    imagePath: ggFitnessImg, 
    title: "GG Fitness - Software Requirements Specification (Group Project)",
    text: "Developed an SRS document for a fitness application project. Contributed to scope definition, use cases, class diagrams, and requirement modeling." 
  }
];

function Projects() {
  return (
    <div>
      <ListComponent items={data} />
    </div>
  );
}

export default Projects;