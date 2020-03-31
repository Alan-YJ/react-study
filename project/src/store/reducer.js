let defaultState = {
    list:[
        {id:1,text:'test1'},
        {id:2,text:'test2'},
        {id:3,text:'test3'},
    ],
    name:'js'
}

export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'change-name':
            newState.name = action.value
            break
    }
    return newState
}

