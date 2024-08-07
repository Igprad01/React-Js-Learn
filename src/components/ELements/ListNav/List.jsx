import React from "react";

const ListNav = (props) => {
    const List = ['home','How to Download','other'];
    return (
        <ul className=" flex justify-end">
            {List.map((list) => (
                <a href="#" className={`mr-10 ${'props.margin'} ${props.animation} `}>{list}</a>
            ))}
        </ul>
    )
}

export default ListNav