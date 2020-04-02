import * as actionTypes from './actionTypes'
const defaultState = {
    list:[],
    name:'',
    loading:false,
    currentItem:undefined
}

export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case actionTypes.CHANGENAME:
            newState.name = action.value
            break;
        case actionTypes.EDITITEM:
            let item = state.list.find((item,index)=>{
                console.info(index,action.value)
                return index == action.value 
            })
            newState.currentItem = item
            newState.name = item.name
            break;
        case actionTypes.SAVEITEM:
            let index = -1
            state.list.forEach((item,idx)=>{
                if(item.id==state.currentItem.id){
                    index = idx
                }
            })
            newState.list.splice(index,1,Object.assign({},state.currentItem,{
                name:state.name
            }))
            newState.name = ''
            newState.currentItem = undefined
            break;
        case actionTypes.ADDITEM:
            let max = 0
            if(state.list.length==0){
                max = 1
            }else{
                max = Math.max(...state.list.map(item=>{return item.id})) + 1 
            }
            newState.list.push({
                name:state.name,
                id:max
            })
            newState.name = ''
            break;
        case actionTypes.REMOVEITEM:
            newState.list.splice(action.value,1)
            break;
        case actionTypes.LOADLIST:
            newState.loading = true
            break;
        case actionTypes.SAVELIST:
            newState.list = action.value
            newState.loading = false
            break;
    }
    return newState
}