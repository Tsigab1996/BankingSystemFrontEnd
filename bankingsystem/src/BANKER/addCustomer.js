import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function addCustomer() {
 

const form = useRef();
let navigate =useNavigate();

let saveCustomer = (e) => {
    e.preventDefault();
    let formData = form.current;

    const data = {
        firstName: formData['firstName'].value,
        lastName: formData['lastName'].value,
        phoneNumber: formData['phoneNumber'].value,
        email: formData['email'].value,
        password: formData['password'].value
    }



    axios.post("http://localhost:8080/api/v1/users", data)
        .then(response => {
            console.log("successfully added")
        }).catch(err => {
            alert(err);
        })
}


const nextHandler=()=>{

    let saveAccount = (e) => {
        e.preventDefault();
        let formData = form.current;
    
        const data = {
            accountNumber: formData['accountNumber'].value,
            balance: formData['balance'].value,
            createdAt: formData['createdAt'].value,
            accountType: formData['accountType'].value,
           
        }
    
    
    
        axios.post("http://localhost:8080/api/v1/accounts", data)
            .then(response => {
                navigate("/");
            }).catch(err => {
                alert(err);
            })
    }
    
    return (
        <div className="NewAccount">
    
            <form ref={form}>
                <h1>Add an Account</h1>
    
                <label>Account Number</label>
                <input type="text"
                    label={'accountNumber'}
                    name={'accountNumber'}
                />
    
                <label>Balance</label>
                <input type="text"
                    label={'balance'}
                    name={'balance'}
                />
    
                <label>Account Type</label>
                <input type="text"
                    label={'accountType'}
                    name={'accountType'}
                />
    
                <button onClick={saveAccount}>Add Account</button>
            </form>
    
        </div>
    );
}

return (
    <div className="NewCustomer">

        <form ref={form}>
            <h1>Add a Customer</h1>

            <label>First Name</label>
            <input type="text"
                label={'firstName'}
                name={'firstName'}
            />

            <label>Last Name</label>
            <input type="text"
                label={'lastName'}
                name={'lastName'}
            />

            <label>Phone Number</label>
            <input type="text"
                label={'phoneNumber'}
                name={'phoneNumber'}
            />

            <label>Email</label>
            <input type="text"
                label={'email'}
                name={'email'}
            />

            <label>Password</label>
            <input type="password"
                label={'password'}
                name={'password'}
            />
            <button onClick={saveCustomer}>Add Customer</button>
            <button onClick={nextHandler}>Next</button>
        </form>

    </div>
);
}
