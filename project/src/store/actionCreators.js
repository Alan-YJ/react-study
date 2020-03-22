import * as actionTypes from './actionTypes'
import axios from 'axios'

export const removeItem = (index)=>({
    type:actionTypes.REMOVE_ITEM,
    value:index
})

export const addItem = (item)=>({
    type:actionTypes.ADD_ITEM,
    value:item
})

export const changeName = (name)=>({
    type:actionTypes.CHANGE_NAME,
    value:name
})

export const setList = (list)=>({
    type:actionTypes.SET_LIST,
    value:list
})

export const selectItem=(item)=>({
    type:actionTypes.SELECT_ITEM,
    value:item
})

export const saveName = (name)=>({
    type:actionTypes.SAVE_NAME,
    value:name
})

export const getList = ()=>{
    return (dispath)=>{
        axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
            console.info(res.data)
            dispath({
                type:actionTypes.SET_LIST,
                value:res.data.list
            })
        })
    }
}

