import React from "react";
import { CalendarTwoTone } from "@ant-design/icons";
import "./Skeleton.css";
import { SingleColumn } from "../SingleColumn/SingleColumn";
import TaskCard from "../TaskCard/TaskCard";
export const Skeleton = () => {
  const columnNames = ["TO DO", "IN PROGRESS", "CODE REVIEW", "QA", "DONE"];
  return (
    <div className="container">
      <p className="title">
        <CalendarTwoTone /> Board
      </p>
      <div className="board-tools">
        <div className="empty-board">Empty board btn</div>
        <div className="employee-avatars">Employees avatars</div>
        <div className="add-employee-icon">Icon</div>
        <div className="ordering">Ordering</div>
        <div className="create-btn">Create button</div>
      </div>
      <div className="board">
        {columnNames.map((item) => {
          return <SingleColumn title={item}>
            <TaskCard />
            </SingleColumn>

        })}
      </div>
    </div>
  );
};
