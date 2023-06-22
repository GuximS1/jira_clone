import React from "react";
import { ISingleColumn } from "../../types/singlecolumn";
import "./SingleColumn.css";
import TaskCard from "../TaskCard/TaskCard";

export const SingleColumn = ({ id, name,tasks }: ISingleColumn) => {
  return (
    <div className="containerColumn">
      <div className="todoContainer">
        <span className="todoText">{name}</span>
      </div>
      {tasks.sort((a,b)=>a.order.row-b.order.row).map(({createdDate,id,name,order,priority,sticker,assigned,storyPoints})=>{
          return <TaskCard id={id} name={name} order={order} priority={priority} 
                    createdDate={createdDate} sticker={sticker} assigned={assigned}
                    storyPoints={storyPoints} key={id}  />
        })}
    </div>
  );
};
