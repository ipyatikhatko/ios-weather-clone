import classes from "./styles.module.css";

export default function WidgetsGrid() {
  return (
    <section className={classes.root}>
      <div
        className={[classes["forecast-hourly"], classes.glass].join(" ")}
      ></div>
      <div
        className={[classes["forecast-10-day"], classes.glass].join(" ")}
      ></div>
      <div className={[classes["uv-index"], classes.glass].join(" ")}></div>
      <div className={[classes["sunset"], classes.glass].join(" ")}></div>
      <div className={[classes["wind"], classes.glass].join(" ")}></div>
      <div
        className={[classes["precipitation"], classes.glass].join(" ")}
      ></div>
      <div className={[classes["feels-like"], classes.glass].join(" ")}></div>
      <div className={[classes["humidity"], classes.glass].join(" ")}></div>
      <div className={[classes["visibility"], classes.glass].join(" ")}></div>
      <div className={[classes["presure"], classes.glass].join(" ")}></div>
      <div
        className={[classes["precipitation-map"], classes.glass].join(" ")}
      ></div>
    </section>
  );
}
