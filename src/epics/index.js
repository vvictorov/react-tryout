import {ofType, combineEpics} from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

const FETCH_ACTIVE_TASKS = 'FETCH_ACTIVE_TASKS';
const FETCH_ACTIVE_TASKS_FULFILLED = 'FETCH_ACTIVE_TASKS_FULFILLED';

const fetchActiveTasksEpic = action$ =>
    action$.ofType(FETCH_ACTIVE_TASKS)
        .mergeMap(action =>
            ajax.getJSON('https://sheetsu.com/apis/v1.0su/3c13c681853e')
                .map(response => ({
                        type: FETCH_ACTIVE_TASKS_FULFILLED,
                        payload: response
                    }
                ))
        );

export const allEpics = combineEpics(fetchActiveTasksEpic);