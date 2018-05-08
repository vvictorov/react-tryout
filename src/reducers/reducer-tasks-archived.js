export default function (state = [], action) {
    let task = {};
    switch (action.type) {
        case "TASK_ARCHIVED":
            task = action.payload;
            return [...state, task];

        case "TASK_DELETED":
            task = action.payload;
            return state.filter(current => current.id !== task.id);

        default:
            return state;
    }
}