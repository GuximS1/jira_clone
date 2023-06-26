import React from "react";
import { CalendarTwoTone } from "@ant-design/icons";
import "./Skeleton.css";
import { SingleColumn } from "../SingleColumn/SingleColumn";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { DragDropContext } from "react-beautiful-dnd";
import { reOrder } from "../../redux/features/taskSlice";

export const Skeleton = () => {
  const columns = [{id:"1",name:"TO DO"}, {id:"2",name:"IN PROGRESS"}, {id:"3",name:"CODE REVIEW"},{id:"4",name:"QA" },{id:"5",name:"DONE" }];

  const tasks = useAppSelector((state)=>state.task.tasks)
  const dispatch = useAppDispatch()

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
      <DragDropContext
          onDragEnd={(result)=>dispatch(reOrder(result))}
        >
        {columns.map((item) => {
          const filteredTasks = tasks.filter((singleTask)=>singleTask.order.column===Number(item.id))
          return <SingleColumn id={item.id} name={item.name} key={item.id} tasks={filteredTasks}  />
        })}
        </DragDropContext>
      </div>
    </div>
  );
};
