import React from 'react'

export default function Users(props) {
    return (
        <div id='customer' >
            <ul>
                <li>
                    <div id="box-customer">
                        <h1>First Name: {props.firstName}</h1>
                        <h1>Last Name: {props.lastName}</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}
