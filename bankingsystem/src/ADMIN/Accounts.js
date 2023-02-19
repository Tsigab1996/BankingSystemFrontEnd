import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Account from './Account';

export default function Accounts(props) {
    const [accounts, setAccounts] = useState([]);

    const getAllAccounts = () => {
        axios.get("http://localhost:8080/api/v1/accounts")
            .then((res) => {
                setAccounts(res.data);
            }).catch(() => {
                console.error();
            })
    }

    const acctList = accounts.map(a => {
        return (
            <Link to={`${a.id}`} key={a.id}>
                <Account id={a.id} key={a.id} accountNumber={a.accountNumber} balance={a.balance} createdAt={a.createdAt} accountType={a.accountType} />
            </Link>
        )
    })

    useEffect(() => {
        getAllAccounts();
    }, [])
    return (
        <div>
            {acctList}
        </div>
    )
}
