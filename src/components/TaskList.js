// TaskList.js
import React, { useState } from 'react';
import { FaPencil } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ tasks, deleteTask, editTask }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [editedStatus, setEditedStatus] = useState('');

    const handleDelete = (index) => {
        deleteTask(index);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedText(tasks[index].text);
        setEditedStatus(tasks[index].status);
    };

    const handleSave = (index) => {
        editTask(index, editedText, editedStatus);
        setEditingIndex(null);
    };

    return (    
        <div>
            {tasks.map((task, index) => (
                <div key={index} className='flex justify-between mx-20 my-3 p-2 border outline-1-black'>
                    {editingIndex === index ? (
                        <>
                            <input value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                            <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                                <option value="error">Error</option>
                                <option value="probably">Probably</option>
                            </select>
                            <button onClick={() => handleSave(index)}>Save</button>
                        </>
                    ) : (
                        <>
                            <div className='left-infos'>{task.text}</div>
                            <div className='flex items-center gap-4 mx-2'>
                                <span>{task.status}</span>
                                <FaPencil size={18} onClick={() => handleEdit(index)} />
                                <AiFillDelete size={22} onClick={() => handleDelete(index)} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
