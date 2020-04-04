const reducer = (state,action)=>{
    switch(action.type){
        case 'change-color':
            return action.value
        default:
            return state
    }
}

export default reducer