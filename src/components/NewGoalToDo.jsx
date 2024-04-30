import React, {useRef} from 'react';
import Input from "./Input";
import Button from "./Button";

const NewGoalToDo = ({AddToDo}) => {

    const theme = useRef();
    const description = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const enteredTheme = theme.current.value;
        const enteredDescription = description.current.value;
        AddToDo(enteredTheme, enteredDescription)
        event.currentTarget.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input type={"text"} id={"title"}  label={"Тема"} ref={theme} required/>
            <Input type={"text"} id={"description"}  label={"Напишите задачу, которую хотите выполнить"} ref={description} required/>

            <Button>
                Добавить
            </Button>


        </form>
    );
};

export default NewGoalToDo;