import React, { useState, useEffect } from 'react'
import { List, Select, Button, Input, Spin, Pagination,Col,Row,DatePicker, Popconfirm, Modal, Tag} from 'antd'
import axios from 'axios'
import ApiUrls from '../config/apiUrl'
import { EditOutlined, EyeOutlined, DeleteFilled } from '@ant-design/icons'

function ArticleList(props){
    const [loading,setLoading] = useState(false)
    const [filter,setFilter] = useState({})
    const [typeList,setTypeList] = useState([])
    const [dataList,setList] = useState([])

    const updateFilter = (data)=>{
        const filterItem = JSON.parse(JSON.stringify(filter))
        data.forEach(item=>{
            if(item.value==undefined){
                delete filterItem[item.key]
            }else{
                filterItem[item.key] = item.value
            }
        })
        setFilter(filterItem)
    }

    const changeDate = (e)=>{
        if(e){
            updateFilter([
                {key:'start_at',value:e[0].valueOf()},
                {key:'end_at',value:e[1].valueOf()}
            ])
        }else{
            updateFilter([
                {key:'start_at',value:undefined},
                {key:'end_at',value:undefined}
            ])
        }
    }

    const loadList = ()=>{
        setLoading(true)
        axios.get(ApiUrls.loadList,{params:filter}).then(res=>{
            if(res.data.status=='success'){
                setList(res.data.data)
                setLoading(false)
            }
        })
    }

    const loadTypes = ()=>{
        return axios.get(ApiUrls.getTypes).then(res=>{
            console.info(res.data)
            setTypeList(res.data.data)
        })
    }

    const search = ()=>{
        loadList()
    }

    const delItem = (item)=>{
        return axios.delete(ApiUrls.deleteArticle,{params:{id:item.id}}).then(res=>{
            if(res.data.status=='success'){
                Modal.success({
                    title:'删除成功',
                    onOk(){
                        loadList()
                    }
                })
            }else{
                Modal.error({
                    title:res.data.msg
                })
            }
        })
    }

    useEffect(()=>{
        loadTypes()
        loadList()
    },[])
    return(
        <div>
            <Row gutter={[10,10]}>
                <Col span={8}>
                    <Input value={filter.title} onChange={e=>{updateFilter([{key:'title',value:e.currentTarget.value}])}} placeholder='标题模糊搜索'/>
                </Col>
                <Col span={4}>
                    <Select placeholder='类型筛选' value={filter.type_id} onChange={e=>{updateFilter([{key:'type_id',value:e}])}}>
                        {
                            typeList.map(typeItem=>{
                                return(
                                <Select.Option key={typeItem.id} value={typeItem.id}>{typeItem.typeName}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Col>
                <Col span={4}>
                    <DatePicker.RangePicker placeholder={['开始时间','结束时间']} onChange={changeDate}></DatePicker.RangePicker>
                </Col>
                <Col span={4}>
                    <Button type='primary' onClick={search}>搜索</Button>
                </Col>
            </Row>
            <Row gutter={[10,10]}>
                <Col span={24}>
                    <List dataSource={dataList} renderItem={item=>(
                        <List.Item key={item.id}
                            actions={[
                                <a title='编辑' onClick={()=>{ props.history.push('/edit_article?id='+item.id)}}><EditOutlined /></a>,
                                <Popconfirm title='确认删除?' okText='确认' cancelText='取消' onConfirm={()=>{delItem(item)}}>
                                    <DeleteFilled style={{color:'orange'}}/>
                                </Popconfirm>
                            ]}
                            >
                            <List.Item.Meta title={<a onClick={()=>{ props.history.push('/edit_article?id='+item.id)}}>{item.title}</a>} description={item.introduce} />
                        </List.Item>
                    )}></List>
                </Col>
            </Row>
        </div>
    )
}

export default ArticleList