import React from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  notification,
} from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import { Task, TaskCreated } from "../../types/taskcard";

const priorityObj = {
  lowest: (
    <DoubleRightOutlined
      rotate={90}
      style={{ color: "blueviolet", fontSize: "14px" }}
    />
  ),
  low: <RightOutlined rotate={90} style={{ color: "blue" }} />,
  medium: <PauseOutlined rotate={90} style={{ color: "#ffc403" }} />,
  high: <LeftOutlined rotate={90} style={{ color: "red" }} />,
  highest: (
    <DoubleLeftOutlined
      rotate={90}
      style={{ color: "#bf2500", fontSize: "14px" }}
    />
  ),
};

const EditTaskModal = ({
  visible,
  onCancel,
  initialValues,
}: {
  visible: boolean;
  onCancel: () => void;
  initialValues: Task;
}) => {
  const [form] = Form.useForm();

  const onFail = () => {
    notification.error({
      message: "Updating a task failed",
      description: "Please make sure you fill all the fields!",
    });
  };

  const onFormFinish = (values: TaskCreated) => {
    onCancel();
  };

  return (
    <Modal
      open={visible}
      footer={null}
      style={{ marginTop: "-50px" }}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFormFinish}
        onFinishFailed={onFail}
        autoComplete="off"
        initialValues={initialValues}
      >
        <span className="title">Edit a task</span>
        <Divider style={{ background: "white" }} />
        <Form.Item
          name="name"
          label={<label style={{ color: "white" }}>Name</label>}
          rules={[
            { required: true },
            { type: "string", warningOnly: true },
            { type: "string", min: 5 },
          ]}
        >
          <Input name={"name"} size="large" />
        </Form.Item>
        <Form.Item
          name="sticker"
          label={<label style={{ color: "white" }}>Sticker</label>}
          rules={[
            { required: true },
            { type: "string", warningOnly: true },
            { type: "string", min: 5 },
          ]}
        >
          <Input name={"sticker"} size="large" />
        </Form.Item>
        <Form.Item
          name="priority"
          label={<label style={{ color: "white" }}>Priority</label>}
        >
          <Select style={{ width: "100%" }} size="large">
            <Select.Option value="lowest">
              {priorityObj["lowest"]} Lowest
            </Select.Option>
            <Select.Option value="low">{priorityObj["low"]} Low</Select.Option>
            <Select.Option value="medium">
              {priorityObj["medium"]} Medium
            </Select.Option>
            <Select.Option value="high">
              {priorityObj["high"]} High
            </Select.Option>
            <Select.Option value="highest">
              {priorityObj["highest"]} Highest
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="storyPoints"
          label={<label style={{ color: "white" }}>Story Points</label>}
        >
          <Input size="large" type="number" />
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            htmlType="button"
            size="middle"
            style={{
              color: "white",
              background: "#161b22",
              marginRight: "8px",
            }}
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            size="middle"
            style={{ color: "white", background: "#238636", border: "0px" }}
          >
            Edit the task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
