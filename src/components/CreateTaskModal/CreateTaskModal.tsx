import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  notification,
} from "antd";
import "./CreateTaskModal.css";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  PauseOutlined,
} from "@ant-design/icons";

import dayjs from "dayjs";
import { useAppDispatch } from "../../redux/store";
import { TaskCreated } from "../../types/taskcard";
import { addTask } from "../../redux/features/taskSlice";

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

const options = [
  { label: "John Doe", value: 1 },
  { label: "Jane Smith", value: 2 },
  { label: "Alice Johnson", value: 3 },
  { label: "Mark Thompson", value: 4 },
];
const initialValues = {
  name: undefined,
  sticker: undefined,
  priority: "lowest",
  storyPoints: 0,
  assigned: undefined,
};
export const CreateTaskModal = ({
  visible,
  onCancel,
}: {
  visible: boolean;
  onCancel: () => void;
}) => {
  const [form] = Form.useForm();

  const onFail = () => {
    notification.error({
      message: "Creating a task failed",
      description: "Please make sure you fill all the fields!",
    });
  };

  const onFormFinish = (values: TaskCreated) => {
    const assignedEmployee = options.find(
      (item) => item.value === values.assigned
    );
    dispatch(
      addTask({
        name: values.name,
        sticker: values.sticker,
        priority: values.priority,
        createdDate: dayjs().format("DD-MM-YYYY"),
        storyPoints: values.storyPoints,
        assigned: assignedEmployee
          ? {
              id: assignedEmployee.value,
              name: assignedEmployee.label,
            }
          : undefined,
      })
    );
    notification.success({
      message: "Task created successfully",
      description: "The new task has been added to the end of TODO column!",
    });
    onCancel();
    form.setFieldsValue(initialValues);
  };
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={visible}
      footer={null}
      style={{ marginTop: "-50px" }}
      onCancel={() => {
        onCancel();
        form.setFieldsValue(initialValues);
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
        <span className="create-task-title">Create a task</span>
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
        <Form.Item
          name="assigned"
          label={<label style={{ color: "white" }}>Assigned</label>}
        >
          <Select size="large" options={options} />
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
              form.setFieldsValue(initialValues);
            }}
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            size="middle"
            style={{ color: "white", background: "#238636", border: "0px" }}
          >
            Create new task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
