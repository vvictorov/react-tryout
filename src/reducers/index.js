import { combineReducers } from 'redux';
import ActiveTasksReducer from './reducer-tasks-active';
import ArchivedTasksReducer from './reducer-tasks-archived';

const allReducers = combineReducers({
    activeTasks: ActiveTasksReducer,
    archivedTasks: ArchivedTasksReducer
});

export default allReducers;