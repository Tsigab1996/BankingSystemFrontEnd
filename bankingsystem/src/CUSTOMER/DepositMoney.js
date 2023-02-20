import axios from 'axios';
import React, { useState } from 'react'
import './Customer.css'

export default function DepositMoney() {



    const [criteria, setCriteria] = useState();
    const [inputId, setInputId] = useState();



    let ApplyDeposit = () => {
        if (criteria != null && inputId != null) {
            axios.post("http://localhost:8080/api/v1/accounts/deposit/" + inputId, {
                params: {
                    filter: criteria,
                }
            }).then((result) => {
                console.log(result.data);
            }).catch(() => {
                console.error();
            });
        }

    }



    return (
        <div>
            <div id="deposit">

                <label>Enter your AccountID: </label>
                <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} /><br/><br/>

                <label>selectBalance: </label>
                <select onChange={(e) => { setCriteria(e.target.value) }}>
                    <option value={'amount'}>500</option>
                    <option value={'amount'}>1000</option>
                    <option value={'amount'}>2000</option>
                    <option value={'amount'}>3000</option>
                </select><br/><br/>

                <button id="depositbtn" onClick={ApplyDeposit}>Deposit</button>



            </div>
        </div>
    )
}
