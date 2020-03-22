import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addItem = (name)=>({
    type:actionTypes.ADD_ITEM,
    value:name
})

export const changeName = (name)=>({
    type:actionTypes.CHANGE_NAME,
    value:name
})

export const saveChange = (name)=>({
    type:actionTypes.SAVE_CHANGE,
    value:name
})

export const editItem = (data)=>({
    type:actionTypes.EDIT_ITEM,
    value:data
})

export const delItem = (index)=>({
    type:actionTypes.DEL_ITEM,
    value:index
})

export const setList = (list)=>({
    type:'set-list',
    value:list
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
            const data = res.data
            const action = setList(data)
            dispatch(action)
        })
    }
}