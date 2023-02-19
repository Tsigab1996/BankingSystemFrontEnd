import React from 'react'

export default function Transaction(props) {
    return (
        <div>
            <div>
                <div id='customer' >
                    <ul>
                        <li>
                            <div id="box-customer">
                                <h1>Transaction Date: {props.transactionDate}</h1>
                                <h1>Amount: {props.amount}</h1>
                                <h1>Transaction Type: {props.transactionType}</h1>
                             
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
