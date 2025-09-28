import profileImg from "../assets/My_img.jpg";
import resumePDF from "../assets/Salman_Vahora_RESUME.pdf";

export default function About() {
  return (
    <main>
      <h2>Salman Sirajbhai Vahora</h2>

      <figure>
        <img 
          src={profileImg} 
          alt="Profile of Salman Vahora" 
          width="200"
        />
      </figure>

      <p>
        I am a motivated student passionate about technology, problem solving, 
        and continuous learning. I enjoy exploring new concepts, applying them 
        in real projects, and improving through feedback. I value being a good 
        listener and using collaboration to create meaningful solutions.
      </p>

      <p>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          View My Resume (PDF)
        </a>
      </p>
    </main>
  );
}