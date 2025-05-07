function Hover1(props){
    return (
        <div>
            <h2 onMouseOver={props.incrCount}>This is the text hover here. Hovered {props.count} times.</h2>
        </div>
    )
}

export default Hover1;