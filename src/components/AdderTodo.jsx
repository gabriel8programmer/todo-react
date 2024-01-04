
//icons
import { FaPlus } from "react-icons/fa";

//styles
import "../assets/sass/components/AdderTodo.sass";

export default function AdderTodo(){
    return (
        <div id="AdderTodo">
            <input type="text" 
                placeholder="Digite a sua nova tarefa"
            />
            <button className="btn btnAdd">
                <span>
                    <FaPlus />
                </span>
            </button>
        </div>
    );
}