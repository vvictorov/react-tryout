import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ToDoList from '../components/ToDoList';
import {archiveTask} from '../actions';

function mapStateToProps(state) {
    return {
        activeTasks: state.activeTasks
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onArchiveTask: archiveTask
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ToDoList);