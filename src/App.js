import "./App.css";
import "./scss/bootstrap.scss";
import SwitchTheme from "./components/SwitchTheme";

export default function App() {
  return (
    <div className="App p-3">
      <h1>My App</h1>
      <div className="d-flex flex-column align-items-center">
        <SwitchTheme />
      </div>
    </div>
  );
}
