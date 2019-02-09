import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import ItemStatus from './components/item-status/item-status';
import TodoList from './components/todo-list/todo-list';
import AddNewTodo from './components/add-new-todo/add-new-todo';
import './index.css';


class App extends Component {
    maxId = 99;
    state = {
        finishTask: "allItem",
        todoData: [
            this.createNewTodoItem("Learn React"),
            this.createNewTodoItem("Read book"),
            this.createNewTodoItem("Drink coffee"),
        ]
    };

    createNewTodoItem(itemText) {
        return {
            itemText,
            done: false,
            key: this.maxId++
        }
    };

    deleteItem = (key) => {
        this.setState(({todoData}) => {
            const newArray = todoData.filter((element) => element.key !== key);
            return {todoData: newArray}
        });
    };

    addItem = (text) => {

        this.setState(({todoData}) => {
            const newItem = this.createNewTodoItem(text);

            let newArr = todoData.slice();
            newArr.unshift(newItem);
            return {todoData: newArr}
        });
    };
    doneItem = (key) => {
        // console.log(key)
        this.setState(({todoData}) => {
            let newArray = todoData.slice();
            let index = newArray.findIndex((item) => item.key === key);
            newArray[index].done = !newArray[index].done;
            // console.log(index)
            return {todoData: newArray}
        })

    };
    onAllDone = () => {
        this.setState({finishTask: "doneItem"})
    };

    onAllActive = () => {
        this.setState({finishTask: "activeItem"})
    };

    onAll = () => {
        this.setState({finishTask: "allItem"})
    };


    findElement = (todoArray) => {
        if (this.state.finishTask === "allItem") {
            return todoArray
        } else if (this.state.finishTask === "doneItem") {
            return todoArray.filter((elem) => elem.done === true)
        } else if (this.state.finishTask === "activeItem") {
            return todoArray.filter((elem) => elem.done === false)
        }
    };

    render() {
        const doneCount = this.state.todoData.filter((element) => element.done === true).length;
        const todoCount = this.state.todoData.length - doneCount;
        const visibleItem = this.findElement(this.state.todoData);
        console.log(visibleItem);
        return (
            <div>
                <h1 className="super_border">Make your own to do list!!!!</h1>
                <ItemStatus onAllDone={this.onAllDone} onAllActive={this.onAllActive} onAll={this.onAll}/>
                <AppHeader done={doneCount} todo={todoCount}/>
                <TodoList
                    todo={visibleItem}
                    onDeleted={this.deleteItem}
                    onItemDone={this.doneItem}
                />
                <AddNewTodo onAddItem={this.addItem}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));