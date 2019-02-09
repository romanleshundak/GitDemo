import React from 'react'
import './app-header.css'

const AppHeader = (props) => {
    return <div className="app_header">
        <h1>
            Todo list
        </h1>
        <div>
            <p> You done {props.done} task </p>
            <p>You mast do {props.todo}</p>
        </div>
    </div>
};

export default AppHeader
