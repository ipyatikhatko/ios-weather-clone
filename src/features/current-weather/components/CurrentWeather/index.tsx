import classes from "./styles.module.css";

export default function CurrentWeather() {
  return (
    <header className={classes["root"]}>
      <h3 className={classes["city"]}>Київ</h3>
      <span className={classes["temperature"]}>20</span>
      <p className={classes["description"]}>Cloudy</p>
      <div className={classes["highest-lowest"]}>
        <span>H:21°C</span>
        <span>L:13°C</span>
      </div>
    </header>
  );
}
