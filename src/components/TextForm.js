import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        convertedText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        convertedText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const [text, setText] = useState('Enter text here');
    const [convText, convertedText] = useState('');
    const styledText = "Your updated text: "
    return (
        <>
            <div className="mb-3">
            <h1>{props.heading }</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lower Case</button>
            <h4 className='my-3'>Number of words : {text.split(" ").length}</h4>
            <h4>Number of characters : {text.length}</h4>
            <p className='mx-2 my-10' onChange={handleOnChange}><b>{styledText}</b>{convText}</p>
  </>

  )
}
