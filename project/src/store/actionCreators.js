import * as actionTypes from './actionTypes'

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

export const delItem = (index)=({
    type:actionTypes.DEL_ITEM,
    value:index
})