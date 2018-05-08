import React from 'react';
import ArchivedList from '../containers/archived-list';

export default (props) => {
    return (
        <div className="container">
            <br/>
            <h3>Archived Tasks</h3>
            <ArchivedList/>
        </div>
    );
}