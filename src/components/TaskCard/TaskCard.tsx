import React, { useMemo, useState } from "react";
import "./TaskCard.css";
import { Avatar, Tag } from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import { Task } from "../../types/taskcard";
import { Draggable } from "react-beautiful-dnd";
import EditTaskModal from "../EditTaskModal/EditTaskModal";

const TaskCard = ({
  createdDate,
  id,
  name,
  priority,
  sticker,
  assigned,
  storyPoints,
  order,
}: Task) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const colors = ["blue", "red", "green", "yellow", "purple"];
  const randomColor = useMemo(() => {
    return colors[sticker.length % colors.length];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sticker]);
  const avatars = [
    "https://www.w3schools.com/howto/img_avatar.png",
    "https://www.w3schools.com/howto/img_avatar2.png",
    "https://www.w3schools.com/w3images/avatar2.png",
    "https://www.w3schools.com/w3images/avatar6.png",
    "https://www.w3schools.com/w3images/avatar5.png",
  ];
  const priorityObj = {
    lowest: (
      <DoubleRightOutlined
        rotate={90}
        style={{ color: "blueviolet", fontSize: "24px" }}
      />
    ),
    low: <RightOutlined rotate={90} style={{ color: "blue" }} />,
    medium: <PauseOutlined rotate={90} style={{ color: "#ffc403" }} />,
    high: <LeftOutlined rotate={90} style={{ color: "red" }} />,
    highest: (
      <DoubleLeftOutlined
        rotate={90}
        style={{ color: "#bf2500", fontSize: "24px" }}
      />
    ),
  };
  return (
    <>
      <EditTaskModal
        visible={isVisibleModal}
        onCancel={() => setIsVisibleModal(false)}
        initialValues={{
          createdDate,
          id,
          name,
          order,
          priority,
          sticker,
          assigned,
          storyPoints,
        }}
      />
      <Draggable key={id} draggableId={id} index={order.row}>
        {(provided, snapshot) => {
          return (
            <div
              className="card-container"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={() => setIsVisibleModal(true)}
            >
              <span className="card-title">{name}</span>
              <Tag color={randomColor}>{sticker}</Tag>
              <div className="task-details">
                {priorityObj[priority]}
                <span className="story-points">
                  {storyPoints ? storyPoints : 0}
                </span>
                <div className="task-avatar">
                  <Avatar
                    src={avatars[Math.floor(Math.random() * avatars.length)]}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
};

export default TaskCard;
