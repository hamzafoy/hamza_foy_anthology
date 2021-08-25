import React from 'react';
import './AnimatedArrow.css';



function AnimatedArrow() {  

    return (
        <>
    
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >

            <g id="triple-chevron" opacity="0.6">
              <path stroke="#B3EA85" id="first-arrow" d="M7 13L12 18 17 13"></path>
          
              <path stroke="#9DE462" id="second-arrow" d="M7 9L12 14 17 9"></path>
            
              <path stroke="#87DE3F" id="third-arrow" d="M7 5L12 10 17 5"></path>
            </g>

          </svg>
    
        </>
    )

}



export default AnimatedArrow;