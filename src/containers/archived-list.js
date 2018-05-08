import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ArchivedList from '../components/ArchivedList';
import {deleteTask} from '../actions';

function mapStateToProps(state) {
    return {
        archivedTasks: state.archivedTasks
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onDeleteTask: deleteTask
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ArchivedList);