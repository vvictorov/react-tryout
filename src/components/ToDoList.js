import React from 'react';

export default (props) => {

    const ulStyle = {
        listStyle: 'none'
    };

    const archiveBtnStyle = {
        display: 'block',
        float: 'right',
        position: 'relative',
        top: '-2px'
    };

    const taskTextContainerStyle = {
        padding: '10px'
    };

    if (props.activeTasks.length === 0) {
        return <h5>No tasks yet!</h5>;
    }

    const tasks = props.activeTasks.map(task => {
        return <li key={task.id}>
            <div style={taskTextContainerStyle}>
                {task.text}
                <button type="button"
                        style={archiveBtnStyle}
                        onClick={() => props.onTaskArchived(task)}>Archive</button>
            </div>
            <hr/>
        </li>;
    });

    return (
        <ul style={ulStyle}>
            {tasks}
        </ul>
    );
}