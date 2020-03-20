import { getList } from '../api/request'

const defaultState = {
    list:[
        {id:1,name:'test'},
        {id:2,name:'js'},
        {id:3,name:'vue'}
    ],
    name:'',
    currentItem:{}
}
// getList().then(res=>{
//     console.info(res)
//     defaultState.list = res.banners.map(item=>{
//         return {
//             id:item.targetId,
//             name:item.typeTitle
//         }
//     })
// })

export default (state = defaultState, action)=>{
    console.info(action,state)
    let newState = {}
    switch(action.type){
        case 'change-name':
            newState = JSON.parse(JSON.stringify(state))
            newState.name = action.value
            break;
        case 'add-item':
            newState = JSON.parse(JSON.stringify(state))
            newState.name = ''
            let id = Math.max(...state.list.map(item=>{return item.id})) + 1
            newState.list = [...state.list,{
                id:id,
                name:action.value
            }]
            break;
        case 'edit-item':
            newState = JSON.parse(JSON.stringify(state))
            newState.currentItem = action.value
            newState.name = action.value.name
            break;
        case 'save-item':
            newState = JSON.parse(JSON.stringify(state))
            let index = 0
            state.list.forEach((item,idx)=>{
                if(item.id == state.currentItem.id){
                    index = idx
                }
            })
            newState.list.splice(index,1,{
                id:state.currentItem.id,
                name:action.value
            })
            newState.currentItem = {}
            newState.name = ''
            break;
        default:
            newState = JSON.parse(JSON.stringify(state))
            break;
    }
    return newState
}