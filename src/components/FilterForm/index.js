
import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd'
const Option = Select.Option;
const FormItem = Form.Item;
const { keys } = Object;
import './style.scss'

@Form.create({
    onValuesChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        const defaultVal = {}
        const { data } = props
        keys(data).forEach(key => defaultVal[key] = Form.createFormField({ value: data[key] }))
        return defaultVal
    }
})
class FilterForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        }

        return (
            <div className='filter-form'>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='提交人:'>
                                {getFieldDecorator('person', {
                                })(<Input width={'100%'} placeholder='请输入内容' type='text' />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='紧急度:'>
                                {getFieldDecorator('urgent', {
                                })(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='位置信息:'>
                                {getFieldDecorator('position')(<Select width={'100%'}>
                                    <Option value={1}>特别急</Option>
                                </Select>)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='单号:'>
                                {getFieldDecorator('order', {
                                })(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='审批状态:'>
                                {getFieldDecorator('status', {
                                })(<Input width={'100%'} placeholder='请输入内容' type='text' />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem>
                                <div className='two-btn'>
                                    <Button type='primary' htmlType='submit'>搜索</Button>
                                    <Button style={{ marginLeft: '10px' }} onClick={this.props.reset}>重置</Button>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


export default FilterForm