import {useRef} from "react";
import useSize from "@react-hook/size";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import {Project} from "./Project";
import {Budget} from "./budget/Budget";

function App() {
  const target = useRef(null);
  const [width, height] = useSize(target);

  return (
    <Router>
      <Main ref={target}>
        <nav>
          <ul>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/budget">Budget</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/project">
            <Project width={width} height={height} />
          </Route>
          <Route path="/budget">
            <Budget />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.main`
  height: 100vh;
  min-height: 1000px;
  min-width: 1300px;
`;
