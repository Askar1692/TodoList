import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {filterValueType} from "./App";
import Button from "./components/Button";


type TodoListPropsType = {
    title: string
    tasks: Array<ArrayPropsType>
    removeTasks: (taskId: string) => void
    changeFilter: (value: filterValueType) => void
    addTask: (newTitle: string) => void
}

type ArrayPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {

    const [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
        console.log(event.key)
    }
    /* const AllChangeFiltredHandler = () => {
         props.changeFilter('All')
     }

     const ActiveChangeFiltredHandler = () => {
         props.changeFilter('Active')
     }

     const CompletedChangeFiltredHandler = () => {
         props.changeFilter('Completed')
     }*/
    const tsarChangeFiltredHandler = (value: filterValueType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTasks(tID)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
                {/* <button onClick={addTaskHandler}>+</button>*/}
            </div>
            <ul>
                {props.tasks.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => removeTaskHandler(el.id)}>x</button>
                        </li>
                    );
                })}

            </ul>
            <div>
                {/*<button onClick={() => tsarChangeFiltredHandler('All')}>All</button>
                <button onClick={() => tsarChangeFiltredHandler('Active')}>Active</button>
                <button onClick={() => tsarChangeFiltredHandler("Completed")}>Completed</button>*/}
                <Button name={'All'} callBack={()=>tsarChangeFiltredHandler('All')}/>
                <Button name={'Active'} callBack={()=>tsarChangeFiltredHandler('Active')}/>
                <Button name={'Completed'} callBack={()=>tsarChangeFiltredHandler('Completed')}/>
                {/* <button onClick={AllChangeFiltredHandler}>All</button>
                <button onClick={ActiveChangeFiltredHandler}>Active</button>
                <button onClick={CompletedChangeFiltredHandler}>Completed</button>*/}
            </div>
        </div>

    );

    //1.создать новый проект
//2.засснуть в него свой src с занятия
//3.У вас получится два совершенно одинаковых проекта

}