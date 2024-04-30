import NewGoalToDo from "./components/NewGoalToDo";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useState} from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import CompletedTodos from "./components/CompletedTodos";


function App() {
    const [goals, setGoals] = useState([]);
    const [idCounter, setIdCounter] = useState(1);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        // Load goals from localStorage on component mount
        const storedGoals = JSON.parse(localStorage.getItem('goals'));
        if (storedGoals) {
            setGoals(storedGoals);
        }
    }, []);

    const handleAddGoal = (goal, summary) => {
        setGoals((prevGoal) => {
            const newGoal = {
                title: goal,
                description: summary,
                id: idCounter,
                completed: false,

            }
            const all = [...prevGoal, newGoal];
            localStorage.setItem('goals', JSON.stringify(all));
            setIdCounter(idCounter + 1)
            return all
        })
    }

    const handleDeleteGoal = (id) => {
            const result = goals.filter((goal) => goal.id !== id)
            setGoals(result)

            localStorage.setItem('goals', JSON.stringify(result));
    }


    const sortGoal = () => {
        const sortedGoals = [...goals].sort((a, b) => a.title.localeCompare(b.title));
        setGoals(sortedGoals);
    };

    const sortGoalsById = () => {
        const sortedGoals = [...goals].sort((a, b) => a.id - b.id);
        setGoals(sortedGoals);
    };

    const markAsDone = (id) => {
        const doneTodo = goals.find(todo => todo.id === id);
        setCompletedTodos(prevCompletedTodos => [
            ...prevCompletedTodos,
            { ...doneTodo }
        ]);
        setGoals(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const deleteCompletedGoals = (id) => {
        const result = completedTodos.filter((goal) => goal.id !== id)
        setCompletedTodos(result);
        localStorage.setItem('goals', JSON.stringify(result));
    }



  return (
      <div className="App">

          <Header>
              <h1>
                  Ваши цели
              </h1>
          </Header>

          <NewGoalToDo AddToDo={handleAddGoal}/>

          <div className={"line"}></div>


          <div className={'sort-section'}>
              <Button onClick={sortGoal}>
                  Сортировать по тему
              </Button>

              <Button onClick={sortGoalsById}>
                  Cортировать по порядку создания
              </Button>

          </div>


          <ToDoList goals={goals} onDeleteGoal={handleDeleteGoal} markAsDone={markAsDone}/>

          <div className={"line"}></div>

          <h1>
              Достигнутые цели
          </h1>

          <CompletedTodos goals={completedTodos} onDeleteGoal={deleteCompletedGoals}/>
      </div>
  );
}

export default App;
