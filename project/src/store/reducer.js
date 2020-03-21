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
        case 'change-name':
            newState.name = action.value
            break
        case 'add-item':
            let id = Math.max(...newState.list.map(item=>{return item.id})) + 1
            newState.list = [...newState.list,{
                id:id,
                name:action.value
            }]
            newState.name = ''
            break
        case 'del-item':
            newState.list.splice(action.value,1)
            break
        case 'edit-item':
            newState.currentItem = action.value.item
            newState.name = action.value.item.name
            break
        case 'save-change':
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
            newState.name = ''
            break
    }
    return newState
}