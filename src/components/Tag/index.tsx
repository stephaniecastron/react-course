import React from "react";
import classNames from "classnames";
import { Categoria, Censura } from "../../types";





const Tag = ({ value }: TagProps) => {
  const classes = classNames(styles.tag, tagClasses[value]);
  return <span className={classes}>{value}</span>;
};

export default Tag;
