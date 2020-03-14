import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            willRender: false
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                willRender: true
            })
        }, 1000)
    }

    render() {
        let willRender = this.state.willRender
        return (
            <ul className="list">
                <TransitionGroup>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={index*50}
                                    classNames='list-item'
                                    in={this.state.willRender}
                                    key={item.id}
                                    appear={true}
                                    unmountOnExit
                                >
                                    <li className="item">
                                        <span>{item.name}</span>
                                        <span>
                                            <button onClick={this.editItem.bind(this, item)}>编辑</button>
                                            <button onClick={this.delItem.bind(this, item, index)}>删除</button>
                                        </span>
                                    </li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </ul>
        )
    }
    editItem(item) {
        this.props.editItem(item)
    }
    delItem(item, index) {
        this.props.delItem(item, index)
    }
}

List.propTypes = {
    list: PropTypes.array,
    editItem: PropTypes.func,
    delItem: PropTypes.func
}

export default List