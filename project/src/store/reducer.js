import * as actionTypes from './actionTypes'
const defaultState = {
    list:[],
    name:'',
    currentItem:undefined
}

export default (state=defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            newState.name = action.value
            break;
        case actionTypes.SET_LIST:
            newState.list = action.value
            break;
    }
    return newState
}