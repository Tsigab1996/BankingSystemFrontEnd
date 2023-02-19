import Link from 'link-react'
import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>


            {/* Admin */}
            <li><Link to="/viewbankers">Bankers</Link></li>
            <li><Link to="/viewcustomers">Customers</Link></li>
            <li><Link to="/viewaccounts">Accounts</Link></li>
            <li><Link to="/addbanker">Add Banker</Link></li>
            <li><Link to="/managebanker">ManageBanker</Link></li>


            {/* Banker */}
            <li><Link to="/addcustomer">Add Customer</Link></li>
            <li><Link to="/viewcustomerinfo">View Customer Info</Link></li>
            <li><Link to="/managecustomer">Manage Customer</Link></li>

            {/* Customer */}
            <li><Link to="/viewbalance">View Balance</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/viewtransaction">View Transaction</Link></li>


            {/* log in */}
            <li><Link to="/login">LogIn</Link></li>

          </ul>
        </nav>
      </header>
    </div>
  )
}
