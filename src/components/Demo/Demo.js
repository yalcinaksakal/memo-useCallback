import React, { useMemo } from "react";

import classes from "./Demo.module.css";

const Demo = props => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Demo RUNNING");

  return (
    props.show && (
      <div className={classes.list}>
        <h2>{props.title}</h2>
        <ul>
          {sortedList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default React.memo(Demo);
