function Counter1({incrCount,count}) {
    return (
        <div>
            <button onClick={incrCount}>Click Here {count} times.</button>
        </div>
    );
}
export default Counter1;