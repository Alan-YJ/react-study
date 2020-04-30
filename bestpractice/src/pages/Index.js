import React,{ useState } from 'react';
import LogoutButton from '../components/LogoutButton'
import withLogin from '../plugins/Hoc'

function Index(){
    return (
        <div>
            <LB></LB>
            <GWC></GWC>
        </div>
    )
}

const LB = withLogin((props)=>{
    return <LogoutButton></LogoutButton>
})

const GWC = withLogin((props)=>{
    return <div>gwc</div>
})



export default Index