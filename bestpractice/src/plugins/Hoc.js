import React from 'react';

const withLogin = (Component) =>{
    const newComponent = (props)=>{
        if(false){
            return <Component {...props} />
        }else{
            return (
                <div>
                    请登录
                </div>
            )
        }
    }
    return newComponent
}

export default withLogin