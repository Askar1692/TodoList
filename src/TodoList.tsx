import React from "react";


type TodoListPropsType = {
    title: string
    tasks: Array<ArrayPropsType>
    removeTasks: (taskId:number)=>void
    changeFilter: (value:filterValueType)=>void
}

type ArrayPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={()=>props.removeTasks(el.id)}>x</button>
                        </li>
                    );
                })}

            </ul>
            <div>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('Active')}>Active</button>
                <button onClick={()=>props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>

    );

    //1.создать новый проект
//2.засснуть в него свой src с занятия
//3.У вас получится два совершенно одинаковых проекта

}