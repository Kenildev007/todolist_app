import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
    const [taskStatus, setTaskStatus] = useState('completed'); // Initialize with a default value

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleSelectChange = (e) => {
        setTaskStatus(e.target.value);
    }

    const handleAddTask = () => {
        if(taskText.trim()) {
            addTask({ text: taskText, status: taskStatus }); // Pass both text and status
            setTaskText('');
        }
    };  

    return (
        <div className='flex justify-center text-center gap-5 p-5 m-5'>
            <input
                className='Entertask'
                type="text" 
                placeholder="Enter Task" 
                value={taskText}
                onChange={handleInputChange}
            /> 
            <select className='border' name="taskStatus" id="taskStatus" onChange={handleSelectChange} value={taskStatus}>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="error">Error</option>
                <option value="probably">Probably</option>
            </select>
            <button className='TaskAddBtn' onClick={handleAddTask}>Add Task</button>
        </div>
    );
};  

export default TodoInput;
