import CurrentWeather from "./features/current-weather";
import classes from "./App.module.css";
import DockRightIcon from "./assets/dock-right.svg?react";
import { useState } from "react";
import WidgetsGrid from "./components/widgets-grid";

function App() {
  const [asideOpen, setAsideOpen] = useState(true);
  return (
    <section data-aside-open={asideOpen} className={classes.layout}>
      <aside data-open={asideOpen} className={classes.aside}></aside>
      <header className={classes.header}>
        <button
          onClick={() => setAsideOpen(!asideOpen)}
          className="aside-toggle"
        >
          <DockRightIcon />
        </button>
      </header>
      <main className={classes.main}>
        <CurrentWeather />
        <WidgetsGrid />
      </main>
    </section>
  );
}

export default App;
