import React from 'react';
import ToDo from "./ToDo";
import Button from "./Button";

const CompletedTodos = ({goals, onDeleteGoal}) => {
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