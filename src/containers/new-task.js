import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NewTask from '../components/NewTask';
import {createTask} from '../actions';

function mapStateToProps(state) {
    return {
        activeTasks: state.activeTasks
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onTaskCreate: createTask
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewTask);