import React from "react";
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

class ToDoList extends React.Component {
  columns = [
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
            onConfirm={this.deletconfirm.bind(null, id)}
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
              onConfirm={this.confirm.bind(null, id)}
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
  state = {
    filterTableList: [],
    tableList: [
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
    ],
    select: 0,
    isModalOpen: false,
    formdate: {
      textarea: null,
      date: null,
    },
  };
  deletconfirm = (e) => {
    const tableList = this.state.tableList.filter((v) => e !== v.id);
    this.setState({
      tableList,
    });
  };
  confirm = (e) => {
    const filterTableList = this.state.tableList.map((v) => {
      if (e == v.id) {
        v.status = true;
      }
      return v;
    });
    this.setState({
      filterTableList,
    });
    message.success("Click on Yes");
  };
  selectBtn = (i) => {
    if (i == this.state.select) return;
    const filterTableList = {
      0: this.state.tableList,
      1: this.state.tableList.filter((v) => !v.status),
      2: this.state.tableList.filter((v) => v.status),
    };
    this.setState({ select: i, filterTableList: filterTableList[i] });
    //如果是接口请求，由于setState是异步的，导致数据无法及时更新。这时接口调用可放在第二个参数之中，等数据改变后再接口调用
    // this.setState({ select: i }, () => { this.getdate() });
  };

  addTask = () => {
    this.setState({ isModalOpen: true });
  };
  handleOk = async () => {
    try {
      await this.formRef.validateFields();
      const data = this.formRef.getFieldValue();

      this.setState({
        isModalOpen: false,
        tableList: [
          ...this.state.tableList,
          {
            key: this.state.tableList.length + 1,
            id: this.state.tableList.length + 1 + "",
            description: data.username,
            status: false,
            tags: data.date,
          },
        ],
      });
      this.formRef.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  handleCancel = () => {
    this.setState({ isModalOpen: false });
    this.formRef.resetFields();
  };
  //调用初始接口
  // componentDidMount() {
  // this.getdate()
  // }
  render() {
    const { TextArea } = Input;
    const { isModalOpen, select, filterTableList, tableList } = this.state;
    return (
      <>
        <Flex justify="space-between">
          <div>task oa任务管理系统</div>
          <Button type="primary" onClick={this.addTask}>
            新增任务
          </Button>
        </Flex>
        <Divider />
        <Flex gap="small">
          {["全部", "未完成", "已完成"].map((v, i) => (
            <Button
              onClick={this.selectBtn.bind(null, i)}
              type={select == i ? "primary" : "default"}
              key={i}
            >
              {v}
            </Button>
          ))}
        </Flex>
        <Table
          style={{ marginTop: "30px" }}
          columns={this.columns}
          pagination={false}
          dataSource={select ? filterTableList : tableList}
        />
        <Modal
          title="新增任务窗口"
          open={isModalOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            ref={(x) => (this.formRef = x)}
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
}
export default ToDoList;
