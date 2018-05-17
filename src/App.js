import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/Archive";
import Navigation from "./components/Navigation";
import ActionBar from "./components/ActionBar";

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
            archivedTasks: [],
            navOpen: false
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

    onNavigationOpened() {
        this.setState({
           navOpen: true
        });
    }

    onNavigationClosed() {
        this.setState({
            navOpen: false
        });
    }

    render() {

        return (
            <div className="App">
                <ActionBar openNavigation={this.onNavigationOpened.bind(this)} />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/archive' component={Archive}/>
                </Switch>

                <div style={this.navStyles}>
                    <Navigation style={this.navStyles}
                                isOpen={this.state.navOpen}
                                title="TODO QuickStart"
                                closeNavigation={this.onNavigationClosed.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
