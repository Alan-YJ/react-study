import * as actionTypes from './actionTypes'

export const addItem = ()=>{
    return{
        type:actionTypes.ADDITEM,
    }
}

export const removeItem = (index)=>{
    return {
        type:actionTypes.REMOVEITEM,
        value:index
    }
}

export const saveItem = ()=>{
    return{
        type:actionTypes.SAVEITEM
    }
}

export const editItem = (index)=>{
    return {
        type:actionTypes.EDITITEM,
        value:index
    }
}

export const changeName = (name)=>{
    return {
        type:actionTypes.CHANGENAME,
        value:name
    }
}

export const loadList = ()=>{
    return{
        type:actionTypes.LOADLIST
    }
}

export const saveList = (list)=>{
    return{
        type:actionTypes.SAVELIST,
        value:list
    }
}