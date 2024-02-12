import React from 'react';

const TodoInput = () => {
    return (
        <div className='flex justify-center border-black text-center gap-5 p-5 m-5'>
            <input className='Entertask' type="text" placeholder="Enter Task" /> <br />
            <button className='TaskAddBtn'>Add Task</button>
        </div>
    );
}

export default TodoInput;