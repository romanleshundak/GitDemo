import React from 'react';

export default class ItemStatus extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onAll}>See all task</button>
                <button onClick={this.props.onAllActive}>See active task</button>
                <button onClick={this.props.onAllDone}>See done task</button>
            </div>
        )
    }
}

