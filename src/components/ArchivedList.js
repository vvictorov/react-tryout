import React from 'react';

export default (props) => {

    const ulStyle = {
        listStyle: 'none'
    };

    const deleteBtnStyle = {
        display: 'block',
        float: 'right',
        position: 'relative',
        top: '-2px'
    };

    const taskTextContainerStyle = {
        padding: '10px'
    };

    if (props.archivedTasks.length === 0) {
        return <h5>No archived tasks!</h5>;
    }

    const tasks = props.archivedTasks.map(task => {
        return <li key={task.id}>
            <div style={taskTextContainerStyle}>
                {task.text}
                <button type="button"
                        style={deleteBtnStyle}
                        onClick={() => props.onDeleteTask(task)}>Delete</button>
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