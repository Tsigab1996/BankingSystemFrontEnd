import React from 'react'

export default function PageRoutes() {
    return (
        <div>
            <Routes>
                {/* <Route path="/">
                    <Route index element={<Properties />} />
                    <Route path=":id" element={<PropertyDetails />}></Route>
                </Route>

                <Route path="rent">
                    <Route index element={<Rent />} />
                    <Route path=":id" element={<PropertyDetails />}></Route>
                </Route>

                <Route path="buy">
                    <Route index element={<Buy />} />
                    <Route path=":id" element={<PropertyDetails />}></Route>
                </Route>

                <Route path="favorites">
                    <Route index element={<FavoriteList />} />
                    <Route path=":id" element={<PropertyDetails />}></Route>
                </Route>

                <Route path="rentedproperties" element={<RentedProperties />}></Route>
                <Route path="recentcustomers" element={<RecentCustomer />}></Route> */}

                
                {/* Admin */} 

                 <Route path="viewemployee" element={<Customers />}></Route>
                <Route path="registeremployee" element={<Owner />}></Route>

                {/* Banker */}

                <Route path="addcustomer" element={<MyProperties />}></Route>
                <Route path="viewcustomerinfo" element={<Applications />}></Route>
                <Route path="managecustomer" element={<AddProperty />}></Route>

                {/* Customer */}
                <Route path="viewbalance" element={<RentedProperties />}></Route>
                <Route path="deposit" element={<RecentCustomer />}></Route>
                <Route path="withdraw" element={<RecentCustomer />}></Route>
                <Route path="viewtransaction" element={<RecentCustomer />}></Route>

                 {/* log in */}
                 <Route path="login" element={<LogInPage />}></Route>
                
            </Routes>
        </div>
    )
}
