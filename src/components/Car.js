import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import PieChart from './PieChart';
import TirePressure from './TirePressure';
import ZoomPan from './ZoomPan';

export default function Car(props) {
  const [flipped, set] = useState(false);
  const transition = useSpring({
    from: {
      left: "20%",
      top: "110%",
      transform: "scale(0.5,0.5)"
    },
    to: {
      left: flipped ? "-5%" : "20%",
      top: "-310%",
      opacity: flipped && props.action !== "" ? 0 : 1
    },
    config: { duration: 1000 }
  });
  
  return (
    <>
      <animated.div
        className="script-box car-bg"
        onMouseDown={() => {
          console.log("mouse pressed " + flipped);
          set(flipped => !flipped);
          props.clicked(!flipped);
        }}
        style={transition}
      />

      <animated.div
        className="script-box drivetrain-bg"
        style={{
          top: "-310%",
          left: "-5%",
          transform: "scale(0.5,0.5)",
          opacity: flipped && props.action === "drivetrain" ? 1 : 0
        }}
      />
      <animated.div
        className="script-box battery-bg"
        style={{
          top: "-310%",
          left: "-5%",
          transform: "scale(0.5,0.5)",
          opacity: flipped && props.action === "battery" ? 1 : 0
        }}
      />
      <animated.div
        className="script-box tires-bg"
        style={{
          top: "-310%",
          left: "-5%",
          transform: "scale(0.5,0.5)",
          opacity: flipped && props.action === "tires" ? 1 : 0
        }}
      />

      <animated.div
        className="chart-box"
        style={{
          left: "30%",
          opacity: flipped && props.action === "drivetrain" ? 1 : 0
        }}>
        <ZoomPan />
        </animated.div>

        <animated.div
        className="chart-box"
        style={{
          left: "30%",
          opacity: flipped && props.action === "battery" ? 1 : 0
        }}>
        <PieChart />
        </animated.div>

        <animated.div
        className="accel-box"
        style={{
          left: "30%",
          opacity: flipped && props.action === "tires" ? 1 : 0
        }}>
        <TirePressure />
        </animated.div>
    </>
  );
}
