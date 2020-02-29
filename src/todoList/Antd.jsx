import React, { Component } from 'react';
import { Input, Card, Button, List, Typography, Radio, message } from 'antd';
import './index.css';

const { Text } = Typography;

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      selectType: 'all',
      data: [
        { title: 'Redux', status: 'unfinish' },
        { title: 'React Hooks', status: 'finished' }
      ]
    };
  }
  handleChange = e => {
    this.setState({
      inputVal: e.target.value
    });
  };
  handleDelete = index => {
    const newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
  };
  handleRecover = index => {
    const newData = [...this.state.data];
    newData[index].status = 'unfinish';

    this.setState({
      data: newData
    });
  };
  handleTextClick = index => {
    if (this.state.selectType !== 'all') {
      message.error('请在all状态下，进行删除更新操作');
      return;
    }
    const newData = [...this.state.data];
    newData[index].status = 'finished';

    this.setState({
      data: newData
    });
  };
  handleAddClick = () => {
    if (this.state.inputVal === '') {
      return;
    }
    const data = [
      ...this.state.data,
      {
        title: this.state.inputVal,
        status: 'unfinish'
      }
    ];
    // TODO: this.setState底层实现
    this.setState({
      inputVal: '',
      data
    });
  };
  handleSelect = e => {
    this.setState({
      selectType: e.target.value
    });
  };
  render() {
    let filterData = [];
    switch (this.state.selectType) {
      case 'unfinish':
        filterData = this.state.data.filter(item => item.status === 'unfinish');
        break;
      case 'finished':
        filterData = this.state.data.filter(item => item.status === 'finished');
        break;
      default:
        filterData = this.state.data;
        break;
    }

    return (
      <Card title="React" style={{ width: 600, margin: '100px auto' }}>
        <div className="header">
          <Input
            value={this.state.inputVal}
            onChange={this.handleChange}
            placeholder="enter your content..."
          ></Input>
          <Button type="primary" onClick={this.handleAddClick}>
            click
          </Button>
        </div>
        <List
          size="small"
          bordered
          dataSource={filterData}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  size="small"
                  onClick={() => this.handleDelete(index)}
                >
                  delete
                </Button>,
                <Button size="small" onClick={() => this.handleRecover(index)}>
                  recover
                </Button>
              ]}
            >
              <Text
                delete={item.status === 'finished'}
                onClick={() => this.handleTextClick(index)}
              >
                {item.title}
              </Text>
            </List.Item>
          )}
        />
        <div style={{ marginTop: '8px' }}>
          <Radio.Group
            defaultValue={this.state.selectType}
            buttonStyle="solid"
            onChange={this.handleSelect}
          >
            <Radio.Button value="all">all</Radio.Button>
            <Radio.Button value="finished">finished</Radio.Button>
            <Radio.Button value="unfinish">unfinish</Radio.Button>
          </Radio.Group>
        </div>
      </Card>
    );
  }
}

export default TodoList;
