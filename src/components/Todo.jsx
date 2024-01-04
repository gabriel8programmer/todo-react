
//icons
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

//styles
import "../assets/sass/components/Todo.sass";

export default function Todo({text}){
    return (
        <div className="Todo">
            <span>{text}</span>
            <button className="btn btnCheck">
                <span>
                    <FaCheck />
                </span>
            </button>
            <button className="btn btnEdit">
                <span>
                    <FaEdit />
                </span>
            </button>
            <button className="btn btnRemove">
                <span>
                    <FaTrash />
                </span>
            </button>
        </div>
    );
}