import React,{useState} from 'react'


export default function TextForm(props) {
    props.toggleUrl('/')
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClear = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text area cleared","danger")
    }
    // const handleReverse = ()=>{
    //     let newtext  = text;
    //     let arr = newtext.split(" ");
    //     arr.reverse();
    //     newtext = arr.join(" ");
    //     setText(newtext)
    // }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleReverseWords = ()=>{
        let newText = text
        newText =  text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Reversed the text","success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all extra spaces","warning")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success")
    }
    const[text,setText] = useState("");
  return (
    <>
        <div className='container'>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'#2E5984':'lightgrey',color:props.mode==='dark'?'white':'black'}} 
                rows="10" value={text}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleClear}>Clear Text</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse Sentence</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleReverseWords}>Reverse Words</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> Words and <b>{text.length} </b> Charaters</p>
            <p>{(0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length).toFixed(3)} Minutes to read the text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
    </>
  )
}
