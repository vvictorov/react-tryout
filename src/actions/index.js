export const createTask = (task) => {
    return {
        type: "TASK_CREATED",
        payload: task
    }
};

export const archiveTask = (task) => {
    return {
        type: "TASK_ARCHIVED",
        payload: task
    }
};

export const deleteTask = (task) => {
    return {
        type: "TASK_DELETED",
        payload: task
    }
};