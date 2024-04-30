import React from 'react';



const ToDo = ({title, description, children}) => {
    return (
        <article>

            <h2>{title}</h2>

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem"}}>
                <p>{description}</p>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem"}}>
                    {children}
                </div>
            </div>


        </article>
    );
};

export default ToDo;