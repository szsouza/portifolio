import React from "react";
import "./skil.css"

const Skils = () => {
  return (
    <div className="Skil">
      <span>Hard Skils</span>
      <div className="Skils">
      <i class="fa-brands fa-html5 i"></i>
      <i class="fa-brands fa-css3-alt i"></i>
      <i class="fa-brands fa-bootstrap i"></i>
      <i class="fa-brands fa-square-js i"></i>
      <i class="fa-brands fa-php i"></i>
      
      </div>
      <span>Soft Skils</span>
      <div className="Skils">
      <i class="fa-solid fa-lightbulb-on i"></i> 
      {/* criatividade */}
      <i class="fa-regular fa-clock i"></i>
      {/* pontualidade */}
      <i class="fa-regular fa-comments i"></i>
      {/* comunicação */}
      <i class="fa-solid fa-puzzle i"></i>
      {/* solução de problemas */}
      <i class="fa-duotone fa-graduation-cap i"></i>
      {/* vontade de aprender mais */}
    </div>
    </div>
  )
}

export default Skils