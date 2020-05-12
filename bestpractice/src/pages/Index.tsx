import * as React from 'react';
import store from '../store/index'
import Button from '../components/Button/button'
import Count from './Count'

const Index:React.FC = ()=>{
    const [state,setState] = React.useState(store.getState())
    const subtractCount:()=>void = ()=>{
        store.dispatch({type:'subtract'})
    }
    return(
        <>
            <Button btnType='primary' onClick={subtractCount} >
                -
            </Button>
            <Count />
        </>
    )
}

export default Index