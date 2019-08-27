import React, { useState, Component } from "react";
import { useSpring, animated } from "react-spring";

export class test extends Component {
    
    render() {
        const [flipped, set] = useState(false);
  const props = useSpring({
    from: {
      left: "40%",
      top: "110%",
      backgroundImage: "url(images/model3-full.png)",
      backgroundRepeat: "no-repeat",
      transform: "scale(0.5,0.5)"
    },
    to: {
      left: flipped ? "-20%" : "40%",
      top: "-25%",
      backgroundImage: "url(images/model3-full.png)",
      backgroundRepeat: "no-repeat",
      transform: "scale(0.5,0.5)"
    },
    config: { duration: 1500 },
    // delay: "1000"
    // to: async next => {
    // //   while (1) {
    //     await next({ left: '90%', top: '20%', width: '20%', height: '50%', background: 'lightblue' })
    //     // await next({ height: '50%', background: 'lightgreen' })
    //     // await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' })
    //     // await next({ top: '0%', height: '100%', background: 'lightpink' })
    //     // await next({ top: '50%', height: '50%', background: 'lightsalmon' })
    //     // await next({ width: '100%', left: '0%', background: 'lightcoral' })
    //     // await next({ width: '50%', background: 'lightseagreen' })
    //     // await next({ top: '0%', height: '100%', background: 'lightskyblue' })
    //     // await next({ width: '100%', background: 'lightslategrey' })
    // //   }
    // },
  });
        return (
            <animated.div
      className="script-box" id="car" ref="car"
      onMouseDown={() => {
        console.log("mouse pressed " + flipped);
        set(flipped => !flipped);
      }}
      style={props}
    />
        )
    }
}

export default test
