import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // text = "new Text" wrong way to change the state
    // setText("new text") correct way to change state
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#272e55'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#272e55'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#272e55'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}
