import { useState } from "react";
import logoReact from "./assets/img/logo_react.svg";
import logoBootstrap from "./assets/img/logo_bootstrap.svg";
import logoWebpack from "./assets/img/logo_webpack.svg";

import "./App.css";
import "./scss/bootstrap.scss";

import { Button } from "./stories/Button";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mb-4 fs-1">
        <a href="https://reactjs.org">
          <img alt="React logo" className="logo spin" src={logoReact} />
        </a>
        {' + '}
        <a href="https://getbootstrap.com">
          <img alt="Bootstrap logo" className="logo" src={logoBootstrap} />
        </a>
        {' + '}
        <a href="https://webpack.js.org">
          <img alt="Webpack logo" className="logo" src={logoWebpack} />
        </a>
      </div>

      <h1>React:</h1>
      <SwitchTheme />

      <h1>Storybook:</h1>
      <Button
        label={`Count is ${count}`}
        backgroundColor={"white"}
        size={"large"}
        onClick={() => setCount((count) => count + 1)}
      />

      <h1>Bootstrap:</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  );
}

export default App;
