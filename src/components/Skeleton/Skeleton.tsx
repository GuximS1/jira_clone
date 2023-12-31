import React, { useState } from "react";
import { CalendarTwoTone,QuestionCircleOutlined } from "@ant-design/icons";
import "./Skeleton.css";
import { SingleColumn } from "../SingleColumn/SingleColumn";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { DragDropContext } from "react-beautiful-dnd";
import { emptyBoard, reOrder } from "../../redux/features/taskSlice";
import { Button, Popconfirm } from "antd";
import { CreateTaskModal } from "../CreateTaskModal/CreateTaskModal";

export const Skeleton = () => {
  const columns = [{id:"1",name:"TO DO"}, {id:"2",name:"IN PROGRESS"}, {id:"3",name:"CODE REVIEW"},{id:"4",name:"QA" },{id:"5",name:"DONE" }];
  const [visible,setVisible] = useState(false)
  const tasks = useAppSelector((state)=>state.task.tasks)
  const dispatch = useAppDispatch()

  return (
    <>
    <CreateTaskModal visible={visible} onCancel={()=>setVisible(false)} />
    <div className="container">
      <p className="title">
        <CalendarTwoTone /> Board
      </p>
      <div className="board-tools">
      <Popconfirm
       title="Empty the board"
       description="Are you sure you want to delete all the board tasks?"
       icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
       onConfirm={()=>dispatch(emptyBoard())}
       >
        <Button type="primary" color="red" danger size="large">Empty board</Button>
       </Popconfirm>
        <div className="employee-avatars">Employees avatars</div>
        <div className="add-employee-icon">Icon</div>
        <div className="ordering">Ordering</div>
          <Button size="large" type="primary" onClick={() => setVisible(true)}>
            Create Task
          </Button>
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
    </>
  );
};
