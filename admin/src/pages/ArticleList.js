import React, { useState, useEffect } from 'react'
import { List, Select, Button, Input, Spin, Pagination,Col,Row,DatePicker} from 'antd'
import axios from 'axios'
import ApiUrls from '../config/apiUrl'

function ArticleList(){
    const [loading,setLoading] = useState(false)
    const [filter,setFilter] = useState({})
    const [typeList,setTypeList] = useState([])
    const [list,setList] = useState([])

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
            }
        })
    }

    const search = ()=>{
        loadList()
    }

    useEffect(()=>{
        loadList()
    })
    return(
        <div>
            <div className='header'>
                <Row gutter={[10,10]}>
                    <Col span={8}>
                        <Input value={filter.title} onChange={e=>{updateFilter([{key:'title',value:e.currentTarget.value}])}} placeholder='标题模糊搜索'/>
                    </Col>
                    <Col span={4}>
                        <Select placeholder='类型筛选' value={filter.type} onChange={e=>{updateFilter([{key:'type',value:e}])}}>
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
            </div>
            <div className='data-list'></div>
            <div className='footer'></div>
        </div>
    )
}

export default ArticleList