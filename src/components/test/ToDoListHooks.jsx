import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Flex,
  Divider,
  Table,
  Space,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";

function ToDoList() {
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
            onConfirm={deletconfirm.bind(null, id)}
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
              onConfirm={confirm.bind(null, id)}
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
  const [tableList, getTableList] = useState([
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
  const [filterTableList, getFilterTableList] = useState([]);
  const [select, getSelect] = useState(0);
  const [isModalOpen, getIsModalOpen] = useState(false);
  let formRef = useRef(null);
  // let [formRef] = Form.useForm();   //antdesign自带的方法
  const deletconfirm = (e) => {
    const List = tableList.filter((v) => e !== v.id);
    getTableList(List);
  };
  const confirm = (e) => {
    const filterTableList = tableList.map((v) => {
      if (e == v.id) {
        v.status = true;
      }
      return v;
    });
    getFilterTableList(filterTableList);
    message.success("Click on Yes");
  };
  const selectBtn = (i) => {
    // if (i == select) return;  //hooks函数中这句话可不加，已默认优化
    const filterTableList = {
      0: tableList,
      1: tableList.filter((v) => !v.status),
      2: tableList.filter((v) => v.status),
    };
    getFilterTableList(filterTableList[i]);
    getSelect(i);
    //class组件如果是接口请求，由于setState是异步的，导致数据无法及时更新。这时接口调用可放在第二个参数之中，等数据改变后再接口调用
    // setState({ select: i }, () => { getdate() });
    //函数组件则放在useEffect中，通过监听select变化，获取新数据
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
      getTableList(() => {
        return [
          ...tableList,
          {
            key: tableList.length + 1,
            id: tableList.length + 1 + "",
            description: data.username,
            status: false,
            tags: data.date,
          },
        ];
      });

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
  // useEffect(() => {
  //   getdate();
  // },[select])
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
export default ToDoList;
