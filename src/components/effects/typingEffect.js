
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
      
      )}

export default TypingEffect;
