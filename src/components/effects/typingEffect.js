import React from "react";
// import Typed from "typed.js";
import "../../pages/Home/Home.css"
import TypeWriterEffect from 'react-typewriter-effect';

// function TypingEffect() {


//   React.useEffect(() => {
//     const typed = new Typed(".multitext",{
//       strings: ['Rodrigo'],
//       loop : true,
//       typeSpeed: 100,
//       backSpeed: 80,
//       backDelay: 1500
//     })

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <span className="multitext"></span>
//     </div>
//   );
// }

const TypingEffect = () => {
  return (
    <TypeWriterEffect
        textStyle={{
          fontWeight: 800,
        }}
        startDelay={200}
        cursorColor="#3F3D56"
        multiText={[
          'Rodrigo Souza'
        ]}
        multiTextDelay={2000}
        typeSpeed={50}
        multiTextLoop
      />
  )
}

export default TypingEffect


