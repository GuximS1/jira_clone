import React from "react";
import { ISingleColumn } from "../types/singlecolumn";
import "./SingleColumn.css";
export const SingleColumn = ({ title }: ISingleColumn) => {
  return (
    <div className="containerColumn">
      <div className="todoContainer">
        <span className="todoText">{title}</span>
      </div>
    </div>
  );
};
