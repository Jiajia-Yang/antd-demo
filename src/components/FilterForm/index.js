
import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';
import './style.scss';

const { Option } = Select;
const FormItem = Form.Item;
const { keys } = Object;


@Form.create({
  onValuesChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    const defaultVal = {};
    const { data } = props;
    keys(data).forEach((key) => {
      defaultVal[key] = Form.createFormField({ value: data[key] });
    });
    return defaultVal;
  },
})
class FilterForm extends React.Component {
  render() {
    const { positionList, onSearch, onReset, form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <div className='filter-form'>
        <Form>
          <Row>
            <Col span={8}>
              <FormItem {...formItemLayout} label='提交人:'>
                  {getFieldDecorator('person')(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem {...formItemLayout} label='紧急度:'>
                {getFieldDecorator('urgent')(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem {...formItemLayout} label='位置信息:'>
                {getFieldDecorator('position')(<Select placeholder='选择提示' width={'100%'}>
                  {
                    positionList.map(item => <Option key={`p-${item.id}`} value={item.id}>{item.name}</Option>)
                  }
                </Select>)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <FormItem {...formItemLayout} label='单号:'>
                {getFieldDecorator('order')(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem {...formItemLayout} label='审批状态:'>
                {getFieldDecorator('status')(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem>
                <div className='two-btn'>
                  <Button type='primary' onClick={onSearch}>搜索</Button>
                  <Button style={{ marginLeft: '10px' }} onClick={onReset}>重置</Button>
                </div>
              </FormItem>
            </Col>
          </Row>
          </Form>
      </div>);
  }
}


export default FilterForm;
