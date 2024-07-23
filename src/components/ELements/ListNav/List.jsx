import { list } from "postcss";
import React from "react";

const ListNav = () => {
    const List = ['home','How to Download','other'];
    return (
        <ul className=" flex justify-end">
            {List.map((item) => (
                <a href="" className="mr-2">{item}</a>
            ))}
        </ul>
    )
}

export default ListNav