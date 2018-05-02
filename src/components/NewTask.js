import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class NewTask extends Component {
    render() {
        return (
            <TextField
                id="newTask"
                label="Enter a new task"
                margin="normal"
                fullWidth={true}
                inputRef={node => {
                    this.onInputKeyUp(node)
                }}
            />
        );
    };

    onInputKeyUp(node) {
        if(node == null) return;

        node.onkeyup = (event) => {
            if (event.key === "Enter" && event.target.value !== "") {

                const d = new Date();
                const time = d.getTime();

                const task = {
                    text: event.target.value,
                    id: time
                };

                this.props.onTaskCreate(task);
                node.value = "";
            }
        }
    }
}

NewTask.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
};

export default NewTask;