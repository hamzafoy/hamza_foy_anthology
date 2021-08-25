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

            <g id="light" opacity="0.6">
              <path id="first-arrow" d="M7 13L12 18 17 13"></path>
            </g>
            <g id="dark" opacity="0.6">
              <path id="second-arrow" d="M7 9L12 14 17 9"></path>
            </g>
            <g id="light" opacity="0.6">
              <path id="third-arrow" d="M7 5L12 10 17 5"></path>
            </g>

          </svg>
    
        </>
    )

}



export default AnimatedArrow;