import { useState } from 'react'
import heading from './images/heading.png'
import './TodoForm.css'
import useTodo from '../../Store/todoContext'

const TodoForm = () => {
    const { addTodo } = useTodo();

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    };

    return (
        <div className='hero'>
            <div className="header-container">
                <img src={heading} alt="header" />
            </div>
            <div className="form">
                <div className='input-container'>
                    <input type="text" 
                        onChange={handleInputValue}
                        
                    />
                </div>
                <div className='button-container'>
                    <button 
                        disabled={!inputValue || inputValue === " "}
                        className='add-button' 
                        type='button'
                        onClick={() => {
                            addTodo(inputValue); 
                            setInputValue('')}
                        }
                    >
                        Add text
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoForm;