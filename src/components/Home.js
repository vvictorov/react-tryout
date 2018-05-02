import React from 'react';
import NewTask from "./NewTask";
import ToDoList from './ToDoList';

export default (props) => {
    return (
        <div className="container">
            <NewTask
                onTaskCreate={task => props.onTaskCreate(task)}
                activeTasks={props.activeTasks}
            />
            <br/>
            <br/>
            <h3>Active Tasks</h3>
            <ToDoList
                activeTasks={props.activeTasks}
                onTaskArchived={task => props.onTaskArchived(task)}/>
        </div>
    );
}