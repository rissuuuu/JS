import React, { useState } from 'react';

function HookArray(){
const [val,setVal] = useState([])
const [item,setItem] = useState('')

const updateArray = ()=>{
    if(val.includes(item)){
        alert(`${item} already present. Choose another number`)
    }
    else{
    setVal([...val , item])
    setItem('')
    }
}

const updateItem = (e)=>{
    setItem(e.target.value)
}


    return(
        <div>
            {val.map(v => <label key={v} style={{display:'block'}}>{v}</label>)}
            <input style={{marginTop:'100px'}} type='text' onChange={updateItem} value={item}/>
            <button onClick={updateArray}>Add</button>
            <button onClick={()=>{setVal([]);setItem('');}}>Reset</button>
        </div>
    )

}

export default HookArray;