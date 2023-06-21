import React from "react";
import { ISingleColumn } from "../../types/singlecolumn";
import "./SingleColumn.css";
import TaskCard from "../TaskCard/TaskCard";

export const SingleColumn = ({ title }: ISingleColumn) => {
  return (
    <div className="containerColumn">
      <div className="todoContainer">
        <span className="todoText">{title}</span>
      </div>
      {Array.from({length:3}).map(()=>{
          return <TaskCard />
        })}
    </div>
  );
};
