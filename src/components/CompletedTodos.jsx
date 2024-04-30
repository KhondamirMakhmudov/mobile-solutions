import React from 'react';
import ToDo from "./ToDo";
import Button from "./Button";

const CompletedTodos = ({goals, onDeleteGoal}) => {
    if( goals.length === 0 ) {
        return <p>Выполненных задач пока нет.</p>
    }

    return (
        <>

            <ul>
                {goals.map(goal =>
                    <li key={goal.id}>
                        <ToDo id={goal.id} title={goal.title} description={goal.description} >

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

export default CompletedTodos;