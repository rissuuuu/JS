import UpdatedComponent from "./HOC";



function ClickCounter(props) {
    return (
        <div>
            <button onClick={()=>props.incrementCount()}>Click Here {props.count} times.</button>
        </div>
    )
}

export default UpdatedComponent(ClickCounter,5);