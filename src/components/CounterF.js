import { useState } from "react";



const CounterF = (props) => {
        const [count, setCount] = useState(0)

        const incrCount = () => {
            setCount(count + 1)
        }

        return (
            <div>
                {props.execute(count,incrCount)}
            </div>
        )
        
    }
export default CounterF;