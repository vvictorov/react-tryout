import React from 'react';
import ArchivedList from './ArchivedList';

export default (props) => {
    return (
        <div className="container">
            <br/>
            <h3>Archived Tasks</h3>
            <ArchivedList
                archivedTasks={props.archivedTasks}/>
        </div>
    );
}