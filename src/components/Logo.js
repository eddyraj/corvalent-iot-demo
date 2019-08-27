import React from "react";
import { useSpring, animated } from "react-spring";

export default function Logo(props) {
  const trans = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { duration: 2000 }
  });
  return (
    <animated.img
      style={trans}
      src="images/tesla-symbol.jpg"
      width="200px"
      onMouseDown={() => {
        props.action("default");
      }}
    />
  );
}
