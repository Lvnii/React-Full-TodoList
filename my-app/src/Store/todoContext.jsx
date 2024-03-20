import { useContext, Context, createContext, useState } from "react";

const TodoContext = createContext({
    data: [],
    addTodo: () => {},
    removeTodo: () => {},
})

export const TodoContextProvider = (props) => {
    const [data, setData] = useState([])

    const addTodo = (todotext) => {
        setData((prevState) => {
            return [...prevState, todotext]
        })
    }

    const removeTodo = (itemId) => {
        setData((prevState) => {
            return [
                ...prevState.filter((item, index) => index !== itemId)
            ]
        })
    }

    return (
        <TodoContext.Provider
            value={{
                data,
                addTodo,
                removeTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

const useTodo = () => useContext(TodoContext)

export default useTodo; 