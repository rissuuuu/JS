import { useState } from "react";



const UpdatedComponent = (OriginalComponent,cc) => {
    return  function NewComponent() {
        const [count, setCount] = useState(0)

        const incrCount = () => {
            setCount(count + cc)
        }

        return (
            <div>
                <OriginalComponent
                    count={count}
                    incrementCount={incrCount}
                />
            </div>
        )
    }
}

export default UpdatedComponent;