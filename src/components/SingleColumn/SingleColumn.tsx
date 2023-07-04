import React from "react";
import { ISingleColumn } from "../../types/singlecolumn";
import "./SingleColumn.css";
import TaskCard from "../TaskCard/TaskCard";
import { Droppable } from "react-beautiful-dnd";

export const SingleColumn = ({
  id,
  name,
  tasks,
  filterValue,
}: ISingleColumn & { filterValue: number }) => {
  const filteredTasks = filterValue
    ? tasks
    : tasks.sort((a, b) => a.order.row - b.order.row);

  return (
    <div className="containerColumn">
      <div className="todoContainer">
        <span className="todoText">{name}</span>
      </div>
      <Droppable droppableId={id} key={id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              style={{
                minHeight: "94%",
              }}
              ref={provided.innerRef}
            >
              {filteredTasks.map(
                (
                  {
                    createdDate,
                    id,
                    name,
                    order,
                    priority,
                    sticker,
                    assigned,
                    storyPoints,
                  },
                  index
                ) => {
                  return (
                    <TaskCard
                      id={id}
                      name={name}
                      order={order}
                      priority={priority}
                      createdDate={createdDate}
                      sticker={sticker}
                      assigned={assigned}
                      storyPoints={storyPoints}
                      key={id}
                    />
                  );
                }
              )}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};
