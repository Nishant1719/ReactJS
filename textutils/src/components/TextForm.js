import React, {useState} from 'react'





export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    // Updating text variable :
    // text = "New text"; //Wrong way
    // setText("New Text"); //Right way
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <label htmlFor="MyBox" className="form-label">{props.subHeading}</label>
            <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

