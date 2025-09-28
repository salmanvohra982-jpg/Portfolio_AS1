import { Link } from 'react-router-dom'

/*Home page with mission statment*/
function Home() {
   return (
    <>
      <main className='Home'>
            <h2>Welcome to My Portfolio</h2>
            
            <p>Always Learning. Always Listening.</p>
            <p>My mission is to learn continuously and listen carefully — to users, teammates, and stakeholders —
            so I can build thoughtful, practical solutions that solve real problems. I take knowledge eagerly,
            ask the right questions, and turn ideas into working software that people enjoy using.</p>
          <div>
            <Link to="/about" aria-label="Learn more about me">
              <button>About Me</button>
            </Link>

            <Link to="/projects" aria-label="View my projects">
              <button>View Projects</button>
            </Link>
          </div>
            <h2>What I bring</h2>
            <ul>
                  <li><strong>Curiosity:</strong> I pursue new knowledge to improve my craft.</li>
                  <li><strong>Active listening:</strong> I gather requirements and feedback before building.</li>
                  <li><strong>Practical results:</strong> I focus on simple, user-centered solutions that work.</li>
            </ul>
      </main>
    </>
  );
}

export default Home;
