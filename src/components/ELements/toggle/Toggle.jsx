import { useState } from "react"

const Toggle = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <button onClick={ToggleMenu} className={props.styling}>
            {isOpen ? 'ON' : 'OFF'}
        </button>
    )
}

export default Toggle