import React, { useState } from 'react';
import '../App.css';

const Form = ({ setName, name, setCardNum, cardNum, day, setDay, month, setMonth, cvc, setCvc }) => {

    // const [name, setName] = useState("");
    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleNum = (e) => {
        console.log(e.target.value)
        setCardNum(e.target.value)
    }

    const handleMonth = (e) => {
        console.log(e.target.value)
        setMonth(e.target.value)
    }
    const handleDay = (e) => {
        console.log(e.target.value)
        setDay(e.target.value)
    }
    const handleCvc = (e) => {
        console.log(e.target.value)
        setCvc(e.target.value)
    }

    return (
        <form>
            <div classname="name-container">
                <label for="name">Cardholder Name</label>
                <input
                    onChange={handleName}
                    type="text"
                    id="name"
                    placeholder="e.g. John Doe">
                </input>
            </div>
            <div className="num-container">
                <label for="name">Cardholder Number</label>
                <input
                    onChange={handleNum}
                    type="text"
                    id="number"
                    placeholder="e.g. 1234 5678 9123 0000">
                </input>
            </div>

            <div className="expiration">
                <div className="expiration_items">
                    <div className="date">
                        <label for="exp">Exp. date (MM/DD)</label>
                        <div className="dateinput">
                            <input onChange={handleMonth} type="text" size="7" id="date" placeholder="MM"></input>
                            <input onChange={handleDay} type="text" size="7" id="date" placeholder="DD"></input>
                        </div>
                    </div>
                    <div className="cvc">
                        <label for="name">CVC</label>
                        <input onChange={handleCvc} type="text" id="cvc" placeholder="e.g. 123"></input>
                    </div>

                </div>

            </div>
            <button class='btn'>Confirm</button>
        </form>
    )
}

export default Form
