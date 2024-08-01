import { useState } from "react"

const Toggle = () => {
    const [isToggle, setIstoggle] = useState(false)

    const handlebutton = () => {
        setIstoggle(!isToggle)
    }

    return (
        <button onClick={handlebutton}>
            {isToggle ? 'ON' : 'OFF'}
        </button>
    )
}

export default Toggle