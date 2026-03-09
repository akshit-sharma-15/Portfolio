import "./Grid.css";

function addAlignClass(classes, prop, value) {
  if (!value) return;
  if (value === "lg") {
    classes.push(`grid-row--${prop}-lg`);
  } else {
    classes.push(`grid-row--${prop}`);
  }
}

function Row({ children, center, around, between, middle, start, end, className, style }) {
  const classes = ["grid-row"];
  addAlignClass(classes, "center", center);
  addAlignClass(classes, "around", around);
  addAlignClass(classes, "between", between);
  addAlignClass(classes, "middle", middle);
  addAlignClass(classes, "start", start);
  addAlignClass(classes, "end", end);
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
}

function Col({ children, xs, lg, className, style, onClick }) {
  const classes = ["grid-col"];
  if (xs) classes.push(`grid-col-xs-${xs}`);
  if (lg) classes.push(`grid-col-lg-${lg}`);
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} style={style} onClick={onClick}>
      {children}
    </div>
  );
}

export { Row, Col };
