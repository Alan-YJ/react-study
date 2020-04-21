import React,{useState} from 'react';
import { Spin, Card, Input, Button} from 'antd'
import { UserOutlined, KeyOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import '../static/style/pages/login.css'

function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setLoading] = useState(false)

    const changePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }
    const changeUsername = (e)=>{
        setUsername(e.currentTarget.value)
    }
    const login = ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    }
    return(
        <div className='login-page'>
            <Spin spinning={isLoading} tip='Loading...'> 
                <Card title='后台管理系统' bordered={true} style={{width:400}}>
                    <Input value={username} size="large" onChange={changeUsername} prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />} placeholder='请输入用户名' className='usernameInput'/>
                    <Input.Password value={password} size="large" onChange={changePassword} prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}}/>}  placeholder='请输入密码' className='pwdInput'/>
                    <Button type='primary' size="large" className='login-btn' onClick={login}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login

