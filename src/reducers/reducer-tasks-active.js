let idCounter = 0;

export default function (state = [], action) {
    let task = {};
    switch (action.type) {
        case "TASK_CREATED":
            task = {
                id: ++idCounter,
                text: action.payload.text
            };

            return [...state, task];

        case "TASK_ARCHIVED":
            task = action.payload;
            return state.filter(current => current.id !== task.id);

        default:
            return state;
    }
}