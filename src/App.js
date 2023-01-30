import './App.css';
import React, { useState } from 'react';
import cardBack from './images/bg-card-back.png';
import cardFront from './images/bg-card-front.png';
import Form from './components/Form';

function App() {

  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="card">
      <div className="card-content">
        <div className="top">
          <img className=" credit card-back" src={cardBack}></img>
          <img className="credit card-front" src={cardFront}></img>
          <p className="number">{cardNum ? cardNum : "0000 0000 0000 0000"}</p>
          <p className="name">{name ? name : "your name here"}</p>
          <p className="date-display">{month && day ? month + "/" + day : "00 / 00"}</p>
        </div>
        <div className="bottom">
          <Form
            name={name}
            setName={setName}
            cardNum={cardNum}
            setCardNum={setCardNum}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
            cvc={cvc}
            setCvc={setCvc}>
          </Form>
        </div>
      </div>

    </div>
  );
}

export default App;
