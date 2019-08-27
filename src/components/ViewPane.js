import React, { useContext } from "react";
import { useTransition, animated } from 'react-spring';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import PieChart from './PieChart';
import TirePressure from './TirePressure';
import ZoomPan from './ZoomPan';

export default function ViewPane() {
  const { location } = useContext(__RouterContext);
  console.log(location);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    Leave: { opacity: 0 }
  });

  return (
    <div id="viewpane">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={item.pathname} style={props}>
          <Switch location={item}>
            <Route exact path="/tires" component={TirePressure} />
            <Route exact path="/battery" component={PieChart} />
            <Route exact path="/drivetrain" component={ZoomPan} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}
