
import React from 'react';
import { Form, Input, Select } from 'antd'
const { Options } = Select;
const FormItem = Form.Item;
const {keys} = Object;

@Form({
    onValuesChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        const defaultVal = {}
        const {filterData} = props
        keys(filterData).forEach(key => defaultVal[key] = filterData[key])
        return defaultVal
    }
})
class FilterForm extends React.Component {

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.props.handleSubmit}>
                <Row>
                    <Col span={8}>
                        <FormItem hasFeedback label="提交人:">
                            {getFieldDecorator('person', {
                                rules: [ { required: true, message: '请选择店铺所在省份/城市' } ],
                            })(<Input width={600} placeholder="请输入内容" type="text" />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem hasFeedback label="紧急度:">
                            {getFieldDecorator('urgent', {
                                rules: [ { required: true, message: '请输入店铺详细地址' } ],
                            })(<Input width={600} placeholder="请输入内容" type="text" />)}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem hasFeedback label="位置信息:">
                            {getFieldDecorator('position')(<Select>
                                <Options value={1}>特别急</Options>
                                <Options value={2}>有一点急</Options>
                                <Options value={3}>一点儿也不急</Options>
                            </Select>)}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <FormItem hasFeedback label="单号:">
                            {getFieldDecorator('addressDetail', {
                                rules: [ { required: true, message: '请输入店铺详细地址' } ],
                            })(<Input width={600} placeholder="请输入内容" type="text" />)}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem hasFeedback label="审批状态:">
                            {getFieldDecorator('addressDetail', {
                                rules: [ { required: true, message: '请输入店铺详细地址' } ],
                            })(<Input width={600} placeholder="请输入内容" type="text" />)}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem>
                            <Button type="primary" htmlType="submit">搜索</Button>
                            <Button onClick={this.props.reset}>重置</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}


export default FilterForm