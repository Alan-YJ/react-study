import React, { createContext } from 'react'

interface ITheme {
    [name:string]:{
        backgroundColor:string;
        color:string;
    }
}

export const themeList:ITheme = {
    light:{
        backgroundColor:'#eee',
        color:'black'
    },
    dark:{
        backgroundColor:'#222',
        color:'white'
    }
}

const store = createContext(themeList.light)

export default store


