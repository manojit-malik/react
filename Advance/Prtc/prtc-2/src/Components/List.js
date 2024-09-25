import React from "react";

const List = ({items}) => {
    return(
        <div>
            <h1>This is my List Component</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index} > {item} </li>
                ))}
            </ul>
            <hr/>
        </div>
    )

}

export default React.memo(List);