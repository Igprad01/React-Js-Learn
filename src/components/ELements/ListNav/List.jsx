import React from "react";

const ListNav = ({margin, animation}) => {
    const List = ['home','How to Download','other'];
    return (
        <ul className=" flex justify-end">
            {List.map((list) => (
                <a href="#" className={`mr-10 ${margin} ${animation} `}>{list}</a>
            ))}
        </ul>
    )
}

export default ListNav