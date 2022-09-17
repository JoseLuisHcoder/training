import { useState } from "react"


const hooksCounter = (initialValue=0, resetValue=0, minValue= - Infinity, maxValue = Infinity) => {
    const [counter, setCounter] = useState(initialValue)

     const add = ()=> {
        if(counter + 1 <= maxValue){
            setCounter(counter + 1)
        }

        }
     const rest = ()=> {
        if(minValue <= counter - 1){
            setCounter(counter - 1)}
        }
     const reset = ()=> setCounter(resetValue)

  return {counter, add, rest, reset}
}
export default hooksCounter