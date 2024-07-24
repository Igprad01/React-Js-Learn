import { list } from "postcss";
import React from "react";

const ListNav = () => {
    const List = ['home','How to Download','other'];
    return (
        <ul className=" flex justify-end ">
            {List.map((list) => (
                <a href="#" className="mr-10">{list}</a>
            ))}
        </ul>
    )
}

export default ListNav