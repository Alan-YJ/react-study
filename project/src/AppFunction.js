import Ract, { Fragment } from 'react';

function App(){
    let list = [
        'vue','js','css'
    ]
    return(
        <Fragment>
            <div className='header'>
                <input type="text" />
                <button>新增技能</button>
            </div>
            <ul className="list">
                {

                }
            </ul>
        </Fragment>
    )
}

export default App;