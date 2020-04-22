import React,{ useState, useEffect } from 'react'
import { Input,Select,Spin,Row,Col,Button,DatePicker, Affix, Modal } from 'antd'
import axios from 'axios'
import ApiUrls from '../config/apiUrl'
import ArticleContent from '../components/ArticleContentMarkdown'
import '../static/style/pages/editArticle.css'

function EditArticle(props){
    const [loading,setLoading] = useState(false)
    const [saveLoading,setSaveLoading] = useState(false)
    const [types,setTypes] = useState([]) 
    const [item,setItem] = useState({
        id:0,
        title:'',
        type_id:undefined,
        content:'',
        introduce:'',
        create_at:''
    })

    const getTypes = async ()=>{
        await new Promise((resolve)=>{
            axios.get(ApiUrls.getTypes).then(res=>{
                if(res.data.msg === "还未登录"){
                    Modal.error({
                        title:res.data.msg,
                        onOk(){
                            props.history.push('/')
                            localStorage.removeItem('openId')
                        }
                    })
                }else{
                    setTypes(res.data.data)
                    resolve(res.data)
                }
            })
        })
    }

    useEffect(()=>{
        if(types.length===0){
            getTypes()
        }
        if(props.location.search){
            const id = props.location.search.substring(1,)
            setItem(Object.assign({},item,{id:id}))
        }
    },[])
    
    const changeTitle = (e)=>{
        setItem(Object.assign({},item,{
            title:e.currentTarget.value
        }))
    }

    const changeType = (e)=>{
        setItem(Object.assign({},item,{
            type_id:e
        }))
    }

    const changeContent = (e)=>{
        setItem(Object.assign({},item,{
            content:e.currentTarget.value
        }))
    }

    const changeIntroduce = (e)=>{
        setItem(Object.assign({},item,{
            introduce:e.currentTarget.value
        }))
    }

    const changeDate = (e)=>{
        setItem(Object.assign({},item,{
            create_at:e.valueOf()
        }))
    }

    const submit = ()=>{
        const itemData = JSON.parse(JSON.stringify(item))
        if(!itemData.title){
            Modal.error({
                title:'标题必填'
            })
            return
        }
        if(!itemData.type_id){
            Modal.error({
                title:'类型必选'
            })
            return
        }
        if(!itemData.content){
            Modal.error({
                title:'内容必填'
            })
            return
        }
        if(!itemData.create_at){
            Modal.error({
                title:'时间必选'
            })
            return
        }
        if(!itemData.introduce){
            itemData.introduce = itemData.content.substring(0,255)
        }
        setSaveLoading(true)
        if(item.id==0){
            itemData.view_count = 0
            axios.post(ApiUrls.addArticle,itemData).then(res=>{
                setSaveLoading(false)
                if(res.data.status=='success'){
                    Modal.success({
                        title:res.data.msg,
                        onOk(){
                            props.history.push('/list')
                        }
                    })
                }else{
                    Modal.error({
                        title:res.data.msg
                    })
                }
            })
        }else{
            axios.put(ApiUrls.saveArticle,itemData).then(res=>{
                setSaveLoading(false)
                if(res.data.status=='success'){
                    Modal.success({
                        title:res.data.msg,
                        onOk(){
                            props.history.push('/list')
                        }
                    })
                }else{
                    Modal.error({
                        title:res.data.msg
                    })
                }
            })
        }
    }

    return(
        <div className='edit-article-page'>
            <Spin top='loading...' spinning={loading}>
                <Row gutter={5}>
                    <Col span={18}>
                        <Row gutter={[10,10]}>
                            <Col span={20}>
                                <Input size='large' value={item.title} onChange={changeTitle} placeholder='请输入标题' />
                            </Col>
                            <Col span={4}>
                                <Select size='large' value={item.type} onChange={changeType} placeholder='请选择文章类型'>
                                    { 
                                        types.map(type=>{
                                            return(
                                                <Select.Option key={type.id} value={type.id}>{type.typeName}</Select.Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={[10,10]}>
                            <Col span={12}>
                                <Input.TextArea onChange={changeContent} className='article-content' rows={35} placeholder='文章内容'></Input.TextArea>
                            </Col>
                            <Col span={12}>
                                <div className='pre-content'>
                                    <ArticleContent content={item.content}></ArticleContent>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Affix offsetTop={5}>
                            <Row gutter={[10,10]}>
                                <Col span={24}>
                                    <Button className='submit-btn' size='large' type='primary' onClick={submit} loading={saveLoading}>{item.id==0?'发布文章':'保存文章'}</Button>
                                </Col>
                            </Row>
                            <Row gutter={[10,10]}>
                                <Col span={24}>
                                    <DatePicker placeholder="发布日期" size='large' onChange={changeDate}></DatePicker>
                                </Col>
                            </Row>
                            <Row gutter={[10,10]}>
                                <Col span={24}>
                                    <Input.TextArea rows={10} value={item.introduce} onChange={changeIntroduce} placeholder='文章简介'></Input.TextArea>
                                </Col>
                            </Row>
                            <Row gutter={[10,10]}>
                                <Col span={24}>
                                    <ArticleContent content={item.introduce}></ArticleContent>
                                </Col>
                            </Row>
                        </Affix>
                    </Col>
                </Row>
            </Spin>
        </div>
    )
}

export default EditArticle
