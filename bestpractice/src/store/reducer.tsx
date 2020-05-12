export interface IAction {
    type:string
}

const defaultState = {
    count:0
}

export default (state = defaultState, action: IAction)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'add':
            newState.count += 1
            break;
        case 'reset':
            newState.count = 0
            break;
        case 'subtract':
            newState.count -= 1
            break;
    }
    return newState
}