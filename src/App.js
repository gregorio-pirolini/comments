import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { letters11, letters5 } from "./letters";

//  ######   #######   #####    #####   #######
//  #######  #######  #######  #######  #######
//  #######  #######  #######  #######    ###
//  ### ###  ###      ### ###  ### ###    ###
//  #######  #######  #######  ### ###    ###
//  ######   #######  #######  ###        ###
//  #######  #######  #######  ### ###    ###
//  ### ###  ###      ### ###  ### ###    ###
//  ### ###  #######  ### ###  #######    ###
//  ### ###  #######  ### ###  #######    ###
//  ### ###  #######  ### ###   #####     ###

function App() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [textarea2, setTextarea2] = useState("");
  useEffect(() => {
    setTextarea(() => comment11());
    setTextarea2(() => comment5());
  }, [text]); // <- add the count variable here

  const myregex = /[a-z\d]/;

  const comment11 = () => {
    //   console.log("change change");

    // make array fron string
    let myComment = "";
    let myLetters = text.split("");
    console.log(letters11.a.length);
    for (let j = 0; j < letters11.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        // t e s t
        // myComment += myLetters[i] + "-";

        if (myLetters[i].match(myregex)) {
          //the letter is in obj
          console.log(myLetters[i]);
          let letter = myLetters[i];
          //console.log(Object.values(myLetters[i]));
          myComment += letters11[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          myComment += "xxx?";
        }

        // myComment += letters[myLetters[i]];
      }
      myComment += " \n";
    }

    return myComment;
  };
  const comment5 = () => {
    //   console.log("change change");

    // make array fron string
    let myComment = "";
    let myLetters = text.split("");
    console.log(letters5.a.length);
    for (let j = 0; j < letters5.a.length; j++) {
      // 0 1 2 3 4 5... 11
      myComment += "//  ";
      for (let i = 0; i < myLetters.length; i++) {
        // t e s t
        // myComment += myLetters[i] + "-";

        if (myLetters[i].match(myregex)) {
          //the letter is in obj
          console.log(myLetters[i]);
          let letter = myLetters[i];
          //console.log(Object.values(myLetters[i]));
          myComment += letters5[letter][j] + "  ";
        } else if (myLetters[i] == " ") {
          //the letter is empty string
          myComment += "      ";
        } else {
          myComment += "xxx?";
        }

        // myComment += letters[myLetters[i]];
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
        </header>
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
      <button type="button" onClick={reset}>
        letters 11
      </button>
      <button type="button" onClick={reset}>
        letters 5
      </button>
      <textarea readOnly value={textarea} />
      <textarea readOnly value={textarea2} />
    </>
  );
}

export default App;
