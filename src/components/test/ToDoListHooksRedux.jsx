import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import action from "@/store/actions";
import {
  Button,
  Flex,
  Divider,
  Table,
  Space,
  Popconfirm,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";

function ToDoList(props) {
  let { tableList, getTableList, delBtn, finBtn } = props;
  const columns = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "任务描述",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (status ? "完成" : "未完成"),
    },
    {
      title: "完成",
      key: "finish",
      dataIndex: "finish",
      render: (_, { tags }) => <span>{Date(tags)}</span>,
    },
    {
      title: "操作",
      key: "action",
      render: (_, { status, id }) => (
        <Space size={[8, 16]}>
          <Popconfirm
            title="您确定要删除此任务吗"
            onConfirm={() => delBtn(id)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
          {status ? (
            ""
          ) : (
            <Popconfirm
              title="您确定要完成此任务吗"
              onConfirm={() => finBtn(id)}
              okText="确定"
              cancelText="取消"
            >
              <a>完成</a>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];
  const [filterTableList, getFilterTableList] = useState([]);
  const [select, getSelect] = useState(0);
  const [isModalOpen, getIsModalOpen] = useState(false);
  let formRef = useRef(null);

  const selectBtn = (i) => {
    const filterTableList = {
      0: tableList,
      1: tableList.filter((v) => !v.status),
      2: tableList.filter((v) => v.status),
    };
    getFilterTableList(filterTableList[i]);
    getSelect(i);
  };

  const addTask = () => {
    getIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      // await formRef.validateFields();  //自带方法不需要.current
      await formRef.current.validateFields();
      const data = formRef.current.getFieldValue();
      getIsModalOpen(false);
      getTableList([
        ...tableList,
        {
          key: tableList.length + 1,
          id: tableList.length + 1 + "",
          description: data.username,
          status: false,
          tags: data.date,
        },
      ]);

      formRef.current.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    getIsModalOpen(false);
    formRef.current.resetFields();
  };
  //调用初始接口
  // componentDidMount() {
  // getdate()
  // }
  useEffect(() => {
    getTableList([
      {
        key: 1,
        id: "1",
        description: "John Brown",
        age: 32,
        status: true,
        tags: 1704216844,
      },
      {
        key: 2,
        id: "2",
        description: "Jim Gan",
        status: false,
        tags: 1704206244,
      },
      {
        key: 3,
        id: "3",
        description: "Jim Green",
        status: false,
        tags: 1704216244,
      },
    ]);
  }, []);
  const { TextArea } = Input;
  return (
    <>
      <Flex justify="space-between">
        <div>task oa任务管理系统</div>
        <Button type="primary" onClick={addTask}>
          新增任务
        </Button>
      </Flex>
      <Divider />
      <Flex gap="small">
        {["全部", "未完成", "已完成"].map((v, i) => (
          <Button
            onClick={selectBtn.bind(null, i)}
            type={select == i ? "primary" : "default"}
            key={i}
          >
            {v}
          </Button>
        ))}
      </Flex>
      <Table
        style={{ marginTop: "30px" }}
        columns={columns}
        pagination={false}
        dataSource={select ? filterTableList : tableList}
      />
      <Modal
        title="新增任务窗口"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          ref={formRef}
          // form={formRef}
          name="basic"
          layout="vertical"
          style={{ maxWidth: 600 }}
          initialValues={{ username: "", date: "" }}
          autoComplete="off"
        >
          <Form.Item
            label="任务描述"
            name="username"
            rules={[{ required: true, message: "请填写任务描述" }]}
            validateTrigger="onBlur"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="任务预期完成时间"
            name="date"
            rules={[{ required: true, message: "请填写任务预期完成时间" }]}
            validateTrigger="onBlur"
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default connect((state) => state.task, action.task)(ToDoList);
