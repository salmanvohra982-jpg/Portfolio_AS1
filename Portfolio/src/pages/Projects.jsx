import ListComponent from "../components/ListComponent";
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

export default Projects;