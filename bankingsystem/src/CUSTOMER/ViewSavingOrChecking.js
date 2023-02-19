import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewSavingOrChecking() {

    const [criteria, setCriteria] = useState();
    const [inputId, setInputId] = useState();
    const [amount, setAmount] = useState();


    let viewSavingOrChecking = () => {
        if (criteria != null && inputId != null) {
            axios.get("http://localhost:8080/api/v1/users/filter/" + inputId, {
                params: {
                    ChooseYourOption: criteria,
                }
            }).then((result) => {
                setAmount(result.data);
            }).catch(() => {
                console.error();
            });
        }

    }

    useEffect(() => {
        viewSavingOrChecking();
    }, [inputId])


    return (
        <div>
            <div>

                <label>InputUserID: </label>
                <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} />

                <label>ChooseYourOption: </label>
                <select onChange={(e) => { setCriteria(e.target.value) }}>
                    <option value={'saving'}>viewSavingBalance</option>
                    <option value={'checking'}>viewCheckingBalance</option>
                </select>


                <button onClick={viewSavingOrChecking}>ViewBalance</button>

                <div>
                    {<label>Your Current Balance is: {amount}</label>}
                </div>

            </div>
        </div>
    )
}
