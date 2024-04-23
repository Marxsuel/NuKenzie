import { useState } from "react"
import { TodoForm } from "../../../components/Forms/TodoForm"
import { TodoList } from "../../../components/Forms/TodoForm/TodoList"

export const HomePage = () => {
    const [listFinance, setListFinance] = useState([]) 

    const addValue = (description, value, typeValue) => {
        const id = crypto.randomUUID()
        const newValue = { description, value, typeValue, id }

        setListFinance([...listFinance, newValue])
        console.log(listFinance)
    }

    const removeValue = (id) => {
        const listFiltered = listFinance.filter((value) => {
            if (value.id !== id) {
                return value
            }
        })
        setListFinance(listFiltered)
    }

    return (
        <>
            <main>
                <div>
                    <TodoForm addValue={addValue} />
                     <TodoList listFinance={listFinance} removeFinance={removeValue} /> 
                </div>
            </main>
        </>
    )
}
