import Link from 'link-react'
import React from 'react'

export default function Header() {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    {/* Customer */}
                    <li><Link to="/viewbalance">View Balance</Link></li>
                    <li><Link to="/deposit">Deposit</Link></li>
                    <li><Link to="/withdraw">Withdraw</Link></li>
                    <li><Link to="/viewtransaction">View Transaction</Link></li>

                    {/* Banker */}
                    <li><Link to="/addcustomer">Add Customer</Link></li>
                    <li><Link to="/viewcustomerinfo">View Customer Info</Link></li>
                    <li><Link to="/managecustomer">Manage Customer</Link></li>

                    {/* Admin */}
                    <li><Link to="/viewemployee">View Employee Info</Link></li>
                    <li><Link to="/registeremployee">Add Employee</Link></li>

                    {/* log in */}
                    <li><Link to="/login">LogIn</Link></li>
                   
                </ul>
            </nav>
        </header>
    </div>
  )
}
