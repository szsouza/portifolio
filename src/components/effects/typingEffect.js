
<<<<<<< HEAD
import Typical from "react-typical";

const TypingEffect = () => {


  return (

      <Typical
              loop={Infinity}
              steps={[
                "Rodrigo Souza",
                1000,
                "",
                1000
      
              ]}
            />
=======
import "../../pages/Home/Home.css";
import Typical from "react-typical";

const TypingEffect = () => {
  return (
    // <TypeWriterEffect
    //     textStyle={{
    //       fontWeight: 800,
    //     }}
    //     startDelay={200}
    //     cursorColor="#3F3D56"
    //     multiText={[
    //       "Rodrigo Souza", 
    //     ]}
    //     multiTextDelay={2000}
    //     typeSpeed={50}
    //     multiTextLoop
    //   />

    <Typical
            loop={Infinity}
            steps={[
              "Rodrigo Souza",
              1000,
              "",
              1000
              
            ]}
          />
>>>>>>> 37b2484bb576bf45f387076ea8f544dd60a26c05
      
      )}

export default TypingEffect;
