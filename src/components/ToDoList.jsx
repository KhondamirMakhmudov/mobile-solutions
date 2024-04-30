import React from 'react';
import ToDo from "./ToDo";
import Button from "./Button";

const ToDoList = ({goals, onDeleteGoal, markAsDone}) => {

    if(goals.length === 0) {
        return  <p className={"hide"}>У вас пока нет целей. Начните добавлять немного </p>
    }

    let warningMode;

    if(goals.length >= 5) {
        warningMode = <p className={"warning"}>не ставьте слишком много целей, вы можете запутаться</p>
    }

    return (

        <>
            {warningMode}
            <ul>
                {goals.map(goal =>
                    <li key={goal.id}>
                        <ToDo id={goal.id} title={goal.title} description={goal.description} >

                            <Button className={'done-to-do'} onClick={() => markAsDone(goal.id)} >
                                Сделано
                            </Button>

                            <Button onClick={() => onDeleteGoal(goal.id)}>
                                Удалить
                            </Button>

                        </ToDo>
                    </li>
                )}
            </ul>
        </>
    );
};

export default ToDoList;