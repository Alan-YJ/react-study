import * as actionTypes from './actionTypes'

const defaultState = {
    list:[
        {id:1,name:'js'},
        {id:2,name:'vue'}
    ],
    currentItem:undefined,
    name:''
}

export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            newState.name = action.value
            break
        case actionTypes.ADD_ITEM:
            let id = Math.max(...newState.list.map(item=>{return item.id})) + 1
            newState.list = [...newState.list,{
                id:id,
                name:action.value
            }]
            newState.name = ''
            break
        case actionTypes.DEL_ITEM:
            newState.list.splice(action.value,1)
            break
        case actionTypes.EDIT_ITEM:
            newState.currentItem = action.value.item
            newState.name = action.value.item.name
            break
        case actionTypes.SAVE_CHANGE:
            let index = 0
            newState.list.forEach((item,idx)=>{
                if(item.id==state.currentItem.id){
                    index = idx
                }
            })
            newState.list[index] = {
                id:state.currentItem.id,
                name:action.value
            }
            newState.currentItem= undefined
            newState.name = ''
            break
    }
    return newState
}