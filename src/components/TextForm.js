import React, { useState } from 'react'
// import lorem from './Lorem'
export default function TextForm(props) {

    const ucClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert('Converted To Uppercase', 'success')
    }

    const lcClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    // const loremText = (props) => {
    //     let hipText = { lorem }
    //     document.getElementById('myBox').innerHTML = hipText;
    // }

    const clearText = () => {
        let newText = '';
        setText(newText)
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    const extraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <div>
                    <div className="display-5 mb-2">Enter Something Here</div>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                    <div className="my-2">
                        <button disabled={text.length === 0} className="mx-0 btn btn-primary" onClick={ucClick}>Uppercase</button>
                        <button disabled={text.length === 0} className="mx-2 btn btn-primary" onClick={lcClick}>Lowercase</button>
                        {/* <button className="mx-0 btn btn-primary" onClick={loremText}>Lorem Shit</button> */}
                        <button disabled={text.length === 0} className="mx-0 btn btn-primary" onClick={copyText}>Copy</button>
                        <button disabled={text.length === 0} className="mx-2 btn btn-primary" onClick={extraSpace}>Remove Xtra Space</button>
                        <button disabled={text.length === 0} className="mx-0 btn btn-primary" onClick={clearText}>Clear</button>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <div className="display-6">Preview of your text</div>
                <p className="my-3">{text}</p>
                <p>Total Words are {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and {text.length} characters</p>
            </div>
        </>
    )
}