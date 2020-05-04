const defaultState = {
    count:0
}


export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'add':
            newState.count += 1
    }
    return newState
}