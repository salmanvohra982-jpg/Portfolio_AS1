/*function About() {
  return (
    <div>
      <h2>This is About Page</h2>
    </div>
  );
}

export default About;*/

/**
 * About page for the portfolio site.
 * Requirements:
 * - Show legal name
 * - Show an image (headshot placeholder)
 * - Short paragraph about who you are
 * - Link to PDF version of resume
 */

/*export default function About() {
  return (
    <main>

      {/* Legal name }
      <h2>Salman Sirajbhai Vahora</h2>

      {/* Profile image placeholder }
      <figure>
        <img 
          src="../assets/linux.png" 
          alt="Profile of Salman Vahora" 
          width="200"
        />
      </figure>

      {/* Short bio }
      <p>
        I am a motivated student passionate about technology, problem solving, 
        and continuous learning. I enjoy exploring new concepts, applying them 
        in real projects, and improving through feedback. I value being a good 
        listener and using collaboration to create meaningful solutions.
      </p>

      {/* Resume link }
      <p>
        <a href="../assets/Salman_Vahora_RESUME.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume (PDF)
        </a>
      </p>
    </main>
  );
}*/

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
