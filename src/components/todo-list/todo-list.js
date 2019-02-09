import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todo, onDeleted, onItemDone}) => {

    const element = todo.map((item) => {
        const {key, itemText, done} = item;
        return (
            <li key={key}>
                <TodoListItem
                    done={done}
                    itemText={itemText}
                    onDeleted={() => {onDeleted(key)}}
                    onItemDone={() => {onItemDone(key)}}
                />
            </li>
        )
    });

    return (
        <div>
            <ul className="list">
                {element}
                {/*<li><TodoListItem itemText="Drink coffee"/></li>*/}
                {/*<li><TodoListItem itemText="Read book"/></li>*/}
                {/*<li><TodoListItem itemText="Learn React"/></li>*/}
            </ul>
        </div>
    )

};

export default TodoList


