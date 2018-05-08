import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/Archive";
import Navigation from "./components/Navigation";

class App extends Component {

    navStyles = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTasks: [],
            archivedTasks: []
        };
    }

    onTaskCreate(task) {
        const activeTasks = this.state.activeTasks.slice();
        activeTasks.push(task);
        this.setState({activeTasks: activeTasks});
    }

    onTaskArchived(task) {
        const archivedTasks = this.state.archivedTasks.slice();
        archivedTasks.push(task);
        const activeTasks = this.state.activeTasks.slice();
        const toMove = activeTasks.find(taskToMove => taskToMove.id === task.id);
        const toMoveIndex = activeTasks.indexOf(toMove);
        if (toMoveIndex > -1) {
            activeTasks.splice(toMoveIndex, 1);
        }

        this.setState({
            activeTasks: activeTasks,
            archivedTasks: archivedTasks
        });
    }

    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/archive' component={Archive}/>
                </Switch>

                <div style={this.navStyles}>
                    <Navigation style={this.navStyles} title="TODO QuickStart"/>
                </div>
            </div>
        );
    }
}

export default App;
