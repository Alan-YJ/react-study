import React,{useState} from 'react';
import { Spin, Card, Input, Button, Modal} from 'antd'
import { UserOutlined, KeyOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import ApiUrls from '../config/apiUrl'
import axios from 'axios'
import '../static/style/pages/login.css'
axios.defaults.withCredentials = true

function Login(props){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setLoading] = useState(false)

    const changePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }
    const changeUsername = (e)=>{
        setUsername(e.currentTarget.value)
    }
    const checkLogin = ()=>{
        if(!username){
            Modal.error({
                title:'用户名不能为空'
            })
            return false
        }
        if(!password){
            Modal.error({
                title:'密码不能为空'
            })
            return false
        }
        return true
    }
    const login = ()=>{
        if(checkLogin()){
            setLoading(true)
            axios.post(`${ApiUrls.checkLogin}`,{
                username:username,
                password:password
            }).then(res=>{
                setLoading(false)
                if(res.data.status=='fail'){
                    Modal.error({
                        title:res.data.msg
                    })
                }else if(res.data.status=='success'){
                    localStorage.setItem('openId',res.data.openId)
                    props.history.push('/')
                }
            })
        }
    }
    const keyDown = (e)=>{
        if(e.key=='Enter'){
            login()
        }
    }
    return(
        <div className='login-page'>
            <Spin spinning={isLoading} tip='Loading...'> 
                <Card title='后台管理系统' bordered={true} style={{width:400}}>
                    <Input value={username} size="large" onChange={changeUsername} prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />} placeholder='请输入用户名' className='usernameInput'/>
                    <Input.Password value={password} size="large" onChange={changePassword} prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}}/>}  placeholder='请输入密码' className='pwdInput' onKeyDown={keyDown}/>
                    <Button type='primary' size="large" className='login-btn' onClick={login}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login

