import React from 'react';
import { FaPencil } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

const TaskList = () => {
    return (
        <div>
            <div className='flex justify-between mx-20 my-3 p-2 border outline-1-black'>
                <div className='left-infos'>helo</div>

                <div className='flex items-center gap-4 mx-2'>
                    <input type="checkbox" id="TaskCompleted" />
                    <FaPencil size={18} />
                    <AiFillDelete size={22} />
                </div>
            </div>
        </div>
    )
}

export default TaskList;