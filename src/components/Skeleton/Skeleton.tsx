import React, { useState } from "react";
import {
  CalendarTwoTone,
  QuestionCircleOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import "./Skeleton.css";
import { SingleColumn } from "../SingleColumn/SingleColumn";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { DragDropContext } from "react-beautiful-dnd";
import { emptyBoard, filtering, reOrder } from "../../redux/features/taskSlice";
import { Button, Popconfirm, Select } from "antd";
import { CreateTaskModal } from "../CreateTaskModal/CreateTaskModal";

export const Skeleton = () => {
  const columns = [
    { id: "1", name: "TO DO" },
    { id: "2", name: "IN PROGRESS" },
    { id: "3", name: "CODE REVIEW" },
    { id: "4", name: "QA" },
    { id: "5", name: "DONE" },
  ];
  const [filterValue, setFilterValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();

  return (
    <>
      <CreateTaskModal visible={visible} onCancel={() => setVisible(false)} />
      <div className="container">
        <p className="board-title">
          <CalendarTwoTone /> Board
        </p>
        <div className="board-tools">
          <Popconfirm
            title="Empty the board"
            description="Are you sure you want to delete all the board tasks?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => dispatch(emptyBoard())}
          >
            <Button type="primary" color="red" danger size="large">
              Empty board
            </Button>
          </Popconfirm>
          <div className="employee-avatars">Employees avatars</div>
          <div className="add-employee-icon">Icon</div>
          <Select
            className="ordering"
            size="large"
            style={{ width: "220px" }}
            bordered={false}
            placeholder={
              <div style={{ color: "black" }}>
                <FilterOutlined /> Board Filters
              </div>
            }
            onChange={(value) => {
              dispatch(filtering(value));
              setFilterValue(value);
            }}
          >
            <Select.Option value={0}>Default</Select.Option>
            <Select.Option value={1}>
              Created date(earliest to latest)
            </Select.Option>
            <Select.Option value={2}>
              Created date(latest to earliest)
            </Select.Option>
            <Select.Option value={3}>Priority(lowest to highest)</Select.Option>
            <Select.Option value={4}>Priority(highest to lowest)</Select.Option>
            <Select.Option value={5}>
              Story points(lowest to highest)
            </Select.Option>
            <Select.Option value={6}>
              Story points(highest to lowest)
            </Select.Option>
          </Select>
          <Button size="large" type="primary" onClick={() => setVisible(true)}>
            Create Task
          </Button>
        </div>
        <div className="board">
          <DragDropContext
            onDragEnd={(result) => {
              dispatch(reOrder(result));
              if (filterValue) dispatch(filtering(filterValue));
            }}
          >
            {columns.map((item) => {
              const filteredTasks = tasks.filter(
                (singleTask) => singleTask.order.column === Number(item.id)
              );
              return (
                <SingleColumn
                  id={item.id}
                  name={item.name}
                  key={item.id}
                  tasks={filteredTasks}
                  filterValue={filterValue}
                />
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </>
  );
};
