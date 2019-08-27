import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import PieChart from "./PieChart";
import TirePressure from "./TirePressure";
import ZoomPan from "./ZoomPan";

export default function Car(props) {
  const [flipped] = useState(false);
  const transition = useSpring({
    from: {
      left: "20%",
      top: "110%",
      transform: "scale(0.5,0.5)"
    },
    to: {
      left: flipped ? "-5%" : "20%",
      top: "-310%",
      opacity: props.action === "default" ? 1 : 0
    },
    config: { duration: 1000 }
  });

  const driveTransition = useSpring({
    top: "-310%",
    left: props.action === "driveButtonPressed" ? "-5%" : "20%",
    transform: "scale(0.5,0.5)",
    opacity:
      props.action === "drivetrain" || props.action === "driveButtonPressed"
        ? 1
        : 0
  });

  const batteryTransition = useSpring({
    top: "-310%",
    left: props.action === "batteryButtonPressed" ? "-5%" : "20%",
    transform: "scale(0.5,0.5)",
    opacity:
      props.action === "battery" || props.action === "batteryButtonPressed"
        ? 1
        : 0
  });

  const tiresTransition = useSpring({
    top: "-310%",
    left: props.action === "tiresButtonPressed" ? "-5%" : "20%",
    transform: "scale(0.5,0.5)",
    opacity:
      props.action === "tires" || props.action === "tiresButtonPressed" ? 1 : 0
  });

  return (
    <>
      <animated.div className="script-box car-bg" style={transition} />

      <animated.div
        className="script-box drivetrain-bg"
        style={driveTransition}
      />
      <animated.div
        className="script-box battery-bg"
        style={batteryTransition}
      />
      <animated.div className="script-box tires-bg" style={tiresTransition} />

      <animated.div
        className="chart-box"
        style={{
          left: "30%",
          opacity: props.action === "driveButtonPressed" ? 1 : 0,
          zIndex: props.action === "driveButtonPressed" ? 1000 : 0
        }}
      >
        <ZoomPan />
      </animated.div>

      <animated.div
        className="chart-box"
        style={{
          left: "30%",
          opacity: props.action === "batteryButtonPressed" ? 1 : 0,
          zIndex: props.action === "batteryButtonPressed" ? 1000 : 0
        }}
      >
        <PieChart action={props.action}/>
      </animated.div>

      <animated.div
        className="accel-box"
        style={{
          left: "30%",
          opacity: props.action === "tiresButtonPressed" ? 1 : 0,
          zIndex: props.action === "tiresButtonPressed" ? 1000 : 0
        }}
      >
        <TirePressure />
      </animated.div>
    </>
  );
}
