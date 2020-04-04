import React,{ createContext , useState , useContext } from 'react';
import CounterPage from './components/Counter'
import Context from './Context'
 
function IndexPage(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <h2>you click count: {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <Context.Provider value={count}>
                <CounterPage />
            </Context.Provider>
        </div>
    )
}

export default IndexPage;