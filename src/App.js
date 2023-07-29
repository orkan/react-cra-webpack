import "./App.css";
import "./scss/bootstrap.scss";
import SwitchTheme from "./components/SwitchTheme";

function setTheme(dark = false) {
  const theme = dark ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
}

function getTheme() {
  return localStorage.getItem("theme") === "dark";
}

setTheme(getTheme());

export default function App() {
  return (
    <div className="App p-3">
      <h1>My App</h1>
      <div className="d-flex flex-column align-items-center">
        <SwitchTheme
          isDark={getTheme()}
          onClick={(...args) => setTheme(args[0])}
        />
      </div>
    </div>
  );
}
