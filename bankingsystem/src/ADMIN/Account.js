import React from 'react'

export default function Account(props) {
    return (
        <div>
            <div id='customer' >
                <ul>
                    <li>
                        <div id="box-customer">
                            <h1>Account Number: {props.accountNumber}</h1>
                            <h1>Balance: {props.balance}</h1>
                            <h1>Created At: {props.createdAt}</h1>
                            <h1>Account Type: {props.accountType}</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
