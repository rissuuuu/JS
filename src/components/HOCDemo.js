import ClickCounter from "./ClickCounter";
import HoverCount from "./HoverCount"



function HocDemo() {
    return (
        <div>
            <h1>Hi</h1>
            <HoverCount />
            <ClickCounter />
        </div>
    )
}

export default HocDemo;