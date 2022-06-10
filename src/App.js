import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { letters11, letters5, letters7, letters19 } from "./letters";

//!  ######   #######   #####    #####   #######
//!  #######  #######  #######  #######  #######
//!  #######  #######  #######  #######    ###
//!  ### ###  ###      ### ###  ### ###    ###
//!  #######  #######  #######  ### ###    ###
//!  ######   #######  #######  ###        ###
//!  #######  #######  #######  ### ###    ###
//!  ### ###  ###      ### ###  ### ###    ###
//!  ### ###  #######  ### ###  #######    ###
//!  ### ###  #######  ### ###  #######    ###
//!  ### ###  #######  ### ###   #####     ###

function App() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textarea4, setTextarea4] = useState("");
  useEffect(() => {
    setTextarea(() => comment11());
    setTextarea2(() => comment5());
    setTextarea3(() => comment7());
    setTextarea4(() => comment19());
  }, [text]); // <- add the count variable here

  //zugelassene buchstaben
  const myregexLetters11 = /[a-z\d]/;
  const myregexLetter5 = /[a-z\d!?]/;
  const myregexLetter7 = /[a-zA-Z\d]/;
  const myregexLetter19 = /[a-zA-Z]/;

  const comment11 = () => {
    // make array from input string
    let myComment = "";
    let myLetters = text.split("");

    for (let j = 0; j < letters11.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        if (myLetters[i].match(myregexLetters11)) {
          //the letter is in obj letters11

          let letter = myLetters[i];

          myComment += letters11[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          myComment += "xxx?"; //the letter is not built yet...
        }
      }
      myComment += " \n";
    }

    return myComment;
  };

  const comment5 = () => {
    // make array fron string from input string
    let myComment = "";
    let myLetters = text.split("");
    console.log(letters5.a.length);
    for (let j = 0; j < letters5.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        if (myLetters[i].match(myregexLetter5)) {
          //the letter is in obj letters5
          console.log(myLetters[i]);
          let letter = myLetters[i];

          myComment += letters5[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          //the letter is not built yet...
          myComment += "xxx?";
        }
      }
      myComment += " \n";
    }

    return myComment;
  };
  const comment7 = () => {
    // make array fron string from input string
    let myComment = "";
    let myLetters = text.split("");
    console.log(letters7.a.length);
    for (let j = 0; j < letters7.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        if (myLetters[i].match(myregexLetter7)) {
          //the letter is in obj letters7
          console.log(myLetters[i]);
          let letter = myLetters[i];

          myComment += letters7[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          myComment += "xxx?"; //the letter is not built yet...
        }
      }
      myComment += " \n";
    }

    return myComment;
  };
  const comment19 = () => {
    // make array fron string from input string
    let myComment = "";
    let myLetters = text.split("");
    console.log(letters19.a.length);
    for (let j = 0; j < letters19.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        if (myLetters[i].match(myregexLetter19)) {
          //the letter is in obj letters19
          console.log(myLetters[i]);
          let letter = myLetters[i];

          myComment += letters19[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          myComment += "xxx?"; //the letter is not built yet...
        }
      }
      myComment += " \n";
    }

    return myComment;
  };

  const handleChange = (event) => {
    console.log("change");
    setText(event);
  };

  const reset = (event) => {
    setText("");
    setTextarea("");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>comment writer</h1>
        </header>
      </div>
      <div>
        Text in den input feld schreiben. Der Text wird dann zu einem
        mehrzeiligen Kommentar umgebaut, fuer schoene Überschrifte in javascript
        files.
      </div>
      <label>Enter Text:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="button" onClick={reset}>
        reset
      </button>
      <h2>letters type 11</h2>
      <p>funktionniert: abcdefghijklmnopqrstuvwxyz1234567890</p>
      <textarea readOnly value={textarea} />
      <h2>letters type 5</h2>
      <p>funktionniert: abcdefghijklmnopqrstuvwxyz1234567890!?</p>
      <textarea readOnly value={textarea2} />
      <h2>letters type 7</h2>
      <p>
        funktionniert:
        abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
      </p>
      <textarea readOnly value={textarea3} />
      <h2>letters type 19</h2>funktionniert: nicht viele....
      <textarea readOnly value={textarea4} />
    </>
  );
}

export default App;
