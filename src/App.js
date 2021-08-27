import {useRef} from "react";
import useSize from "@react-hook/size";
import "./App.css";
import {Project} from "./Project";
import styled from "styled-components";

function App() {
  const target = useRef(null);
  const [width, height] = useSize(target);

  return (
    <Main ref={target}>
      <Project width={width} height={height} />
    </Main>
  );
}

export default App;

const Main = styled.main`
  height: 100vh;
  min-height: 1000px;
  min-width: 1300px;
`;
