import axios from 'axios';
import React, { useState } from 'react'
import Transaction from '../ADMIN/Transaction';

export default function viewTransactionHistroy() {

    const [userId, setUserId] = useState();
    const [accountId, setAccountId] = useState();
    const [transactions, setTransactions] = useState([]);


    let getAllTransactions = () => {
        axios.get("http://localhost:8080/api/v1/transactions/" + userId + "/account/" + accountId + "/viewTransactions")
            .then((res) => {
                setTransactions(res.data);
            }).catch(() => {
                console.error();
            })

    }

    const transactionsList = transactions.map(t => <Transaction id={t.id} key={t.id} transactionDate={t.transactionDate} amount={t.amount} transactionType={t.transactionType} />)

    useEffect(() => {
        getAllTransactions();
    }, [])


    return (
        <div>
            <div>


                <label>InputUserID: </label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />

                <label>InputAccountID: </label>
                <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} />

                <div>
                    {transactionsList}
                </div>
            </div>
        </div>
    )
}
