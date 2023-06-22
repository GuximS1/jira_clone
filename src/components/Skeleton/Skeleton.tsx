import React from "react";
import { CalendarTwoTone } from "@ant-design/icons";
import "./Skeleton.css";
import { SingleColumn } from "../SingleColumn/SingleColumn";
import { useAppSelector } from "../../redux/store";

export const Skeleton = () => {
  const columns = [{id:1,name:"TO DO"}, {id:2,name:"IN PROGRESS"}, {id:3,name:"CODE REVIEW"},{id:4,name:"QA" },{id:5,name:"DONE" }];

  const tasks = useAppSelector((state)=>state.task.tasks)
  
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
        {columns.map((item) => {
          const filteredTasks = tasks.filter((singleTask)=>singleTask.order.column===item.id)
          return <SingleColumn id={item.id} name={item.name} key={item.id} tasks={filteredTasks}  />
        })}
      </div>
    </div>
  );
};
