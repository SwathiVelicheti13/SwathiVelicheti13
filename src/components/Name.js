import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/name.css';

const Name = () => {
  return (
    <div className="name-container">
      <div className="name-text">
        <h1 className="reveal-text">Swathi Velicheti</h1>
        <p className="role-text">Back End Developer</p> {/* Role text below the name */}
      </div>
      <div className="social-links">
        <a href="https://github.com/SwathiVelicheti13" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#333" size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/swathi-velicheti-465255124/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#0077B5" size="3x" />
        </a>
        <a href="mailto:your-swathivelicheti13@gmail.com">
          <FontAwesomeIcon icon={faGoogle} color="#DB4437" size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Name;






// import React from 'react';
// import Typewriter from 'typewriter-effect';

// const Name = () => {
//   return (
//     <div className="name-card">
//       <h1>
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter
//               .typeString("Hi, I'm John Doe")
//               .pauseFor(500)
//               .deleteChars(4)
//               .typeString('a Software Engineer')
//               .start();
//           }}
//         />
//       </h1>
//     </div>
//   );
// };

// export default Name;



// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import "../styles/name.css";

// const Name = () => {
//     return (
//         <div className="name-card">
//             <h1>Swathi Velicheti</h1>
//             <p>I am a Software Developer</p>
//             <div className="social-icons">
//                 <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
//                 <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
//                 <a href="#" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
//             </div>
//         </div>
//     );
// }

// export default Name;
