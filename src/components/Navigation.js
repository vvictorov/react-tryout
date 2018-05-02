import React from 'react';
import {BottomNavigation, BottomNavigationAction} from "material-ui";
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
            >
                <BottomNavigationAction label="Active" icon={<TodayIcon/>} onClick={() => this.props.history.push('/')}  />
                <BottomNavigationAction label="Archive" icon={<PlaylistAddCheck />} onClick={() => this.props.history.push('/archive')} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />}  onClick={() => this.props.history.push('/test')} />
            </BottomNavigation>
        );
    }
}

export default withRouter(Navigation)