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
    return state
}