import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input type="text" 
                        value={this.state.name} 
                        onChange={this.changeName.bind(this)}
                        onKeyDown={this.keyDown.bind(this)}
                        ref={(input)=>{this.input = input}}
                    />
                    <button onClick={this.saveName.bind(this)}>
                        {this.props.currentItem?"保存技能":"新增技能"}
                    </button>
                </div>
            </Fragment>
        )
    }
    changeName(){
        this.setState({
            name:this.input.value
        })
    }
    saveName(){
        if(!this.input.value){
            return
        }
        if(this.props.currentItem){
            this.props.saveEditName(this.input.value)
        }else{
            this.props.addItem(this.input.value)
        }
        this.setState({
            name:''
        })
    }
    setName(name){
        this.setState({
            name:name
        })
    }
    keyDown(e){
        if(e.key=='Enter'){
            this.saveName()
        }
    }
}

Header.propTypes = {
    currentItem:PropTypes.object
}

export default Header