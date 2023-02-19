import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Accounts from '../../ADMIN/Accounts'
import AddBanker from '../../ADMIN/AddBanker'
import BankerDetails from '../../ADMIN/BankerDetails'
import Bankers from '../../ADMIN/Bankers'
import CustomerDetails from '../../ADMIN/CustomerDetails'
import Customers from '../../ADMIN/Customers'
import ManageBanker from '../../ADMIN/ManageBanker'
import TransactionDetails from '../../ADMIN/TransactionDetails'
import AddCustomer from '../../BANKER/addCustomer'
import ManageCustomer from '../../BANKER/ManageCustomer'
import DepositMoney from '../../CUSTOMER/DepositMoney'
import ViewSavingOrChecking from '../../CUSTOMER/viewSavingOrChecking'
import ViewTransactionHistroy from '../../CUSTOMER/viewTransactionHistroy'
import WithdrawMoney from '../../CUSTOMER/WithdrawMoney'

export default function PageRoutes() {
    
    return (
        <div>
            <Routes>

              {/* ADMIN */}

                 {/* This is how to view Bankers and their Details */}
                 <Route path="viewbankers">
                    <Route index element={<Bankers/>}/>
                    <Route path=":id" element={<BankerDetails/>}></Route>
                 </Route>

                 {/* This is how to view customers and their Details */}
                 <Route path="viewcustomers">
                    <Route index element={<Customers/>}/>
                    <Route path=":id" element={<CustomerDetails/>}></Route>
                 </Route>

                   {/* This is how to view accounts and their Transactions */}
                   <Route path="viewaccounts">
                    <Route index element={<Accounts/>}/>
                    <Route path=":id" element={<TransactionDetails/>}></Route>
                 </Route>


                 {/* This is how to add a banker */}
                <Route path="addbanker" element={<AddBanker />}></Route>
                  {/* This is how to manage a banker */}
                <Route path="managebanker" element={<ManageBanker />}></Route>


                {/* BANKER */}

                 {/* This is how to add a customer */}
                <Route path="addcustomer" element={<AddCustomer />}></Route>
                 
                 {/* This is how to view customers and their details */}
                <Route path="viewcustomerinfo">
                    <Route index element={<Customers/>}/>
                    <Route path=":id" element={<CustomerDetails/>}></Route>
                 </Route>

                 {/* This is how to manage a customer */}
                <Route path="managecustomer" element={<ManageCustomer />}></Route>


                {/* CUSTOMER */}
                <Route path="viewbalance" element={<ViewSavingOrChecking/>}></Route>
                <Route path="deposit" element={<DepositMoney/>}></Route>
                <Route path="withdraw" element={<WithdrawMoney />}></Route>
                <Route path="viewtransaction" element={<ViewTransactionHistroy />}></Route>


                 {/* log in */}
                 <Route path="login" element={<LogInPage />}></Route>

                
            </Routes>
        </div>
    )
}
