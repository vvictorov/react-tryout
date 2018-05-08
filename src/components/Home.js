import React from 'react';
import NewTask from "../containers/new-task";
import ToDoList from '../containers/todo-list';

export default (props) => {
    return (
        <div className="container">
            <NewTask/>
            <br/>
            <br/>
            <h3>Active Tasks</h3>
            <ToDoList/>
        </div>
    );
}