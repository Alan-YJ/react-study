import React, { Fragment } from 'react'

function App(){
    return(
        <Fragment>
            <div className='header'>
                <input type="text"/>
                <button>增加技能</button>
            </div>
            <ul className="list">
                <li>vue</li>
                <li>javascript</li>
                <li>css</li>
            </ul>
        </Fragment>
    )
}

export default App