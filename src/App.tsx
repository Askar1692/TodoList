import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";


type filterValueType = 'All'| 'Active' | 'Completed'



function App() {

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "TypeScript", isDone: false}
    ])

    const removeTasks = (taskId: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskId)
        setTasks1(tasks1)
        console.log(tasks1)
    }

    const [filterValue, setFilterValue]=useState("All")

    let filtredTask1 = tasks1
    if (filterValue==="Active") {
        filtredTask1 = tasks1.filter(el => el.isDone === false)
    }
    if (filterValue==="Completed") {
        filtredTask1 = tasks1.filter(el => el.isDone === true)
    }

    const changeFilter =(value: filterValueType)=>{
        console.log(value)
        setFilterValue(value)
    }

    filtredTask1 = tasks1.filter(el => el.isDone !== false)


    return (
        <div className="App">
            <TodoList
                title={'Hello'}
                tasks={filtredTask1}
                removeTasks={removeTasks}
                changeFilter={changeFilter}/>

        </div>
    );
}

export default App;
