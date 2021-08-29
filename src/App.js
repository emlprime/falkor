import * as R from "ramda";
import {useRef} from "react";
import {useLocation} from "react-router-dom";
import useSize from "@react-hook/size";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import "./App.css";
import {Project} from "./Project";
import {Budget} from "./budget/Budget";

const {equals} = R;

function Link({to, children}) {
  const location = useLocation();
  const isSelectedLink = equals(to, location.pathname);

  const linkClass = isSelectedLink ? "selected" : "deselected";
  return (
    <RouterLink className={linkClass} to={to}>
      {children}
    </RouterLink>
  );
}

function App() {
  const target = useRef(null);
  const [width, height] = useSize(target);

  return (
    <Router>
      <Main ref={target}>
        <nav>
          <ul>
            <li>
              <Link to="/falkor">Falkor</Link>
            </li>
            <li>
              <Link to="/budget">Budget</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/falkor">
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

  nav {
    ul {
      list-style-type: none;
      display: flex;
      li {
        padding: 0.2rem;
      }
    }
  }
`;
