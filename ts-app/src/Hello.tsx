import React, { useState, useEffect, useRef, useContext } from 'react'
import MouseComponent from './MouseEvent'
import useURLLoader from './hooks/useURLLoader'
import store,{ themeList } from './Context/Theme'
import { Spin} from 'antd'

const LikeButton: React.FC =()=>{
    const [type,setType] = useState('primary')
    const [like,setLike] = useState(0)
    const [loading,result] = useURLLoader('https://dog.ceo/api/breeds/image/random',[like])
    const domRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        document.title = `点击了${like}次`
    },[type])
    useEffect(()=>{
        if(domRef && domRef.current){
            console.info(domRef.current)
            domRef.current.focus()
        }
    })
    const style = useContext(store)
    const [theme,setTheme] = useState(style)
    return(
        <>
        <store.Provider value={theme}>
            <Spin spinning={loading}>
                <input type="text" ref={domRef}/>
                <button style={theme} onClick={()=>{setTheme(themeList.dark)}}>{like}👍</button>
                {
                    !loading && result && result.status=='success'? 
                    <img src={result.message} />:
                    <div>🐕加载中..</div>
                }
                <MouseComponent></MouseComponent>
            </Spin>
        </store.Provider>
        </>
    )
}

export default LikeButton