import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238)); */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #d6bebe;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 1 0px 20px rgba(0, 0, 0, 0.06);
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  color: transparent;
  path {
    stroke: white;
    stroke-width: "2";
  }
`;

const svgVariants = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setShowing((currentValue) => !currentValue);
  };
  return (
    <Wrapper>
      <button onClick={onClick}>Click</button>
      {showing ? <Box></Box> : null}
    </Wrapper>
  );
}

export default App;
