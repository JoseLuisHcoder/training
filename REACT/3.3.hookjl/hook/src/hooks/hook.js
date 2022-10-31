import { useState } from "react"


const hookCounter = () => {

    const [counter, setCounter] = useState(0)

    const rest = () =>{
        if(counter > 0){
            setCounter(counter - 1)
        }
    } 
    const add = () => {
        if(counter < 20){
            setCounter(counter + 1)
        }
    } 
    const resett = () => setCounter(0)

    return{counter, rest, add, resett}
}

export default hookCounter