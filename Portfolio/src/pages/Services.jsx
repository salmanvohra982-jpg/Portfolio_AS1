/*import ListComponent from "../components/ListComponent";
import photo08 from '../assets/logo.svg';
import photo09 from '../assets/logo.svg';

const data = [
     { imagePath: photo08, text: 'This is the first Service Offered' },
     { imagePath: photo09, text: 'This is the second Service Offered' },
];

function Services(){
    return(
        <div>
            <h3>Services</h3>
            <ListComponent items={data}/>
        </div>
    );
}

export default Services;*/

import ListComponent from "../components/ListComponent";
import programming_img from '../assets/programming.png';
import webdesign_Img from '../assets/webdisign.png';
import linux_Img from '../assets/linux.png';

const data = [
     { 
          imagePath: programming_img,
          text: 'C# Programming - Building robust and efficient applications using C# and .NET technologies.' 
     },
     { 
          imagePath: webdesign_Img, 
          text: 'Web Design - Creating responsive and user-friendly websites with HTML, CSS, and JavaScript.' 
     },
     { 
          imagePath: linux_Img, 
          text: 'Linux Shell Scripting - Automating tasks and managing systems through Bash scripting.' 
     },
];

function Services(){
    return(
        <div>
            <ListComponent items={data}/>
        </div>
    );
}

export default Services;