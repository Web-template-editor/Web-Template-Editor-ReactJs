import React from "react";
import Typewriter from "typewriter-effect";
function Typing_effect(){
    return(
        <div className="Type">
        <Typewriter
    
         onInit={(typewriter)=> {
    
         typewriter
          
         .typeString("WELCOME")
           
         .pauseFor(1000)
         .deleteAll()
         .typeString("WELCOME DEVELOPERS")
         .start();
         }}
         />
      </div>

    )
}
export default Typing_effect