import React, { useState } from "react";

export default function Textform(props) {
    
  const [text, settext] = useState("");
//   const [btntext, settextbtn] = useState("Enable Dark Mode");
//   const [mystyle, setmystyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });
//   let changeStyle = () => {
//     if (mystyle.color === "black") {
//       setmystyle({
//         color: "white",
//         backgroundColor: "black",
//       });
//       settextbtn("Enable Light Mode");
//     } else {
//       setmystyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       settextbtn("Enable Dark Mode");
//     }
//   };

  const handleOnChange = (e) => {
    settext(e.target.value);
  };
  const handleUppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert('converted to uppercase','danger')
  };
  const handlelowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert('converted to Lower case','warning')
  };
  const clear = () => {
    settext("");
    props.showalert('cleared Sucessfully','success')
  };
  return (
    <>

      <div className="container mt-3 p-3" style= {{color:props.mode==='dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea  style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'}}
            id="mybox"
            rows="8"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here "
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1  " onClick={handlelowercase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clear}>
          Clear
        </button>
        {/* <button className="btn btn-primary" onClick={changeStyle}>{btntext}</button> */}
      </div>
      <div className="container p-3" style= {{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summury</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes</p>
        <h2> Preview</h2>
        <p>{text.length?text:"Enter Text above to preview"}</p>
      </div>
    </>
  );
}
