import useTodo from "../../Store/todoContext";
import './TodoList.css';
import remove from './assets/remove.png'


const TodoList = () => {
    const { data } = useTodo();
    
    return (
        <div className="todo-div">
            {data.map((item, index) => {
                return (
                    <li key={index} className="todo-element">
                        <p>{item} <img src={remove} alt="remove-button" /></p>
                    </li>
                )
            })}
        </div>
    )
}

export default TodoList;