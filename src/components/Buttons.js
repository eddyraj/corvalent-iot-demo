import React from "react";
import { useSpring, animated } from "react-spring";

export default function Buttons(props) {
  const transitions = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
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
          onMouseDown={() => {
            props.action("tiresButtonPressed");
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
          onMouseDown={() => {
            props.action("batteryButtonPressed");
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
          onMouseDown={() => {
            props.action("driveButtonPressed");
          }}
        >
          Drivetrain
        </button>
      </div>
    </animated.div>
  );
}
