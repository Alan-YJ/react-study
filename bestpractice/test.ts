
enum Color {
    Red = 1,
    Blue = 2,
    Green = 3
}

interface IUser {
    readonly id: number,
    text?:string
}

let users: Array<IUser> = [
    { id:0,text: 'test1' },
    { id:1,text: 'test2' },
    { id:2,text: 'test3' },
    { id:3,text: 'test4' },
    { id:4,text: 'test5' },
    { id:4,text:'1' },
]

function printUsers(user:IUser) :void{
    user.text = '2'
    console.info(user.text)
}

printUsers(users[3])