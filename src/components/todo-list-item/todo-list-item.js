import React from 'react';
import './todo-list-item.css'

export default class TodoListItem extends React.Component {
    state = {
        // delete: false,
        // done: false,
        valueText: this.props.itemText,
        change: false
    };

    // deleteText = () => {
    //     console.log(this.state);
    //     this.setState({
    //         delete: true
    //     })
    // };
    changeSpan = (e) => {
        this.setState((state) => {
            return {change: !state.change}
        });
    };

    doneItem = () => {
        this.setState((state) => {
            return {done: !state.done}
        });
    };

    changeInput = (e) => {
        this.setState({
            valueText: e.target.value,
            // change: false
        });
    };

    render() {
        let text = this.state.valueText;
        let className = "list_item";
        let inputClassName = "inpChange";
        let spanClassName = "";
        let displayNone = " none";
        // console.log(this.props.done);
        if (this.props.done) {
            spanClassName += " through"
        }

        if (!this.state.change) {
            inputClassName += displayNone;
        } else if (this.state.change) {
            spanClassName += displayNone
        }


        if (this.state.delete) {
            className += displayNone
        }
        return (
            <div className={className}>
                <input type="text" onInput={this.changeInput} placeholder={text} className={inputClassName}/>
                <span onClick={this.changeSpan} className={spanClassName}>{text}</span>
                <div>
                    <button  onClick={this.changeSpan}>Change</button>
                    <button  onClick={this.props.onDeleted} >delete</button>
                    <button  onClick={this.props.onItemDone}>Done</button>

                </div>
            </div>

        )
    }

}
