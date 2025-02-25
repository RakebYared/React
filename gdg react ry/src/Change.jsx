import React,{useState} from "react";

function Change(){
    const [text, setText] = useState();
    const handleChange = (event) => {
        setText(event.target.value)
    };
    return(
        
        <div style={{margin : '10px'}}>
            <p>Text: {text}</p>
            <input value = {text} onChange={handleChange}></input>
        </div>
    );
}

export default Change