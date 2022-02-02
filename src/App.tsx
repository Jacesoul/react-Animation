import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
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
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          ></Box>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
