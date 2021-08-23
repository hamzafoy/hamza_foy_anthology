import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';



function AnimatedArrow() {
    const [alternate, set] = useState(false);
    const props = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        reset: true,
        reverse: alternate,
        delay: 400,
        config: config.molasses,
        onRest: () => set(!alternate)
    })

    return (
        <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="feather feather-arrow-down-circle"
            viewBox="0 0 24 24"
            style={props}
    >
        <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
        </mask>
        <circle cx="12" cy="12" r="10" mask="url(#mask)"/>

        <g stroke="currentColor">
        <path d="M8 12L12 16 16 12"></path>
        <path d="M12 8L12 16"></path>
        </g>

    </animated.svg>
    )

}



export default AnimatedArrow;