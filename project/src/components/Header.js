import React, { Component } from 'react'
import { Input, Button} from 'antd'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    render() { 
        return ( 
            <div className='header'>
                <Input placeholder='请输入名称' 
                    ref={(input)=>{this.input = input}}
                    value={this.state.name} 
                    onChange={this.changeName.bind(this)}
                    onKeyDown={this.keyDown.bind(this)}/>
                <Button type='primary'>
                    {
                        this.props.currentItem?"保存":"添加"
                    }
                </Button>
            </div>
         );
    }
    changeName(e){
        this.setState({
            name:e.target.value
        })
    }
    saveName(){
        if(!this.state.name){
            return 
        }
        if(this.props.currentItem){
            this.props.saveName(this.state.name)
        }else{
            this.props.addItem(this.state.name)
        }
        this.setState({
            name:''
        })
    }
    keyDown(e){
        if(e.key=='Enter'){
            this.saveName()
        }
    }
}
 
export default Header;