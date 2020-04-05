import React, { useReducer, useState } from 'react'
import Context from './store'
import Buttons from './components/Buttons'
import Show from './components/Show'
import reducer from './store/reducer'
import SubComponent from './components/SubComponent'

function App(){
    const [text1,setText1] = useState('init text')
    const [text2,setText2] = useState('init text2')
    return (
        <div>
            <button onClick={()=>{setText1(new Date().getTime()+'Text 1')}}>click set Text1</button>
            <button onClick={()=>{setText2(new Date().getTime()+'Text 2')}}>click set Text2</button>
            <SubComponent name={text1}>
                {text2}
            </SubComponent>
        </div>
    )
}

export default App