import UpdatedComponent from "./HOC";



function HoverCount(props) {
    return (
        <div>
            <h2 onMouseOver={()=>props.incrementCount()}>This is the text hover here. Hovered {props.count} times.</h2>
        </div>
    )
}

export default UpdatedComponent(HoverCount,10);