import { useContext, Context, createContext, useState } from "react";

const TodoContext = createContext({
    data: [],
    addTodo: () => {},
})

export const TodoContextProvider = (props) => {
    const [data, setData] = useState([])

    const addTodo = (todotext) => {
        setData((prevState) => {
            return [...prevState, todotext]
        })
    }

    return (
        <TodoContext.Provider
            value={{
                data,
                addTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

const useTodo = () => useContext(TodoContext)

export default useTodo; 