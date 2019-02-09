import React, {Component} from 'react';
import './add-new-todo.css'

class AddNewTodo extends Component {

    state = {
        inputValue: ""
    };

    inpValue = (e) => {
        this.setState({
            inputValue: e.target.value.toUpperCase()
        })
    };
    sendData = () => {
        this.props.onAddItem(this.state.inputValue)
        this.setState({inputValue: ""})
    };

    render() {
        return (
            <div className="add_new_todo">
                <input type="text" onChange={this.inpValue} placeholder="Enter new task" value={this.state.inputValue}/>
                <button onClick={this.sendData}>Add Item</button>
            </div>
        )
    }
}

export default AddNewTodo