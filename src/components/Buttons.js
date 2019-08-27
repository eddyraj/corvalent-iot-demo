import React from "react";
import { useSpring, animated } from "react-spring";

export default function Buttons(props) {
  console.log("car has been clicked " + props.clicked);
  const transitions = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 2000 },
    delay: "1000"
  });
  return (
    <animated.div style={transitions}>
      <div className="btn-group-vertical">
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onMouseOver={() => {
            props.action("tires");
          }}
        >
          Tires
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onMouseOver={() => {
            props.action("battery");
          }}
        >
          Batteries
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onMouseOver={() => {
            props.action("drivetrain");
          }}
        >
          Drivetrain
        </button>
      </div>
    </animated.div>
  );
}
