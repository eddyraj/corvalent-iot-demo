import React from "react";
import { useSpring, animated } from "react-spring";

export default function Logo() {
  const props = useSpring({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    },
    config: { duration: 2000 }
  });
  return (<animated.img style={props} src="images/tesla-symbol.jpg" width="200px"/>);
}