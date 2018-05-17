import React from 'react';
import {BottomNavigation, BottomNavigationAction} from "material-ui";
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        const classes = (this.props.isOpen) ? "open" : "closed";

        return (
            <div id="main-navigation" className={classes}>
                <button className="btn btn-info btn-close"
                        onClick={() => this.props.closeNavigation()}>X</button>
                <ul>
                    <li>
                        <TodayIcon  onClick={() => this.props.history.push('/')}  /> Active
                    </li>
                    <li>
                        <PlaylistAddCheck  onClick={() => this.props.history.push('/archive')} /> Archive
                    </li>
                </ul>
            </div>



            /*{/!*<BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
            >
                <BottomNavigationAction label="Active" icon={<TodayIcon/>} onClick={() => this.props.history.push('/')}  />
                <BottomNavigationAction label="Archive" icon={<PlaylistAddCheck />} onClick={() => this.props.history.push('/archive')} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />}  onClick={() => this.props.history.push('/test')} />
            </BottomNavigation>*!/}*/
        );
    }
}

export default withRouter(Navigation)