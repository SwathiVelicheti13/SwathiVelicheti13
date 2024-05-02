import React from 'react';
import '../styles/name.css'; // CSS styles for the parallax effect

const Name = () => {
  return (
    <div className="reveal-container">
    <h1 className="reveal-text">Swathi Velicheti</h1>
    <p className="reveal-text">Back End Developer</p>
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
