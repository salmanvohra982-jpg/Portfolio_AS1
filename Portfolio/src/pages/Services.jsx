import ListComponent from "../components/ListComponent";
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

export default Services;