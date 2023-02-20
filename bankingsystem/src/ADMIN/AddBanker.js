import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddBanker(props) {

    const form = useRef();
    let navigate = useNavigate();

    let saveBanker = (e) => {
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
            .then(() => {
                navigate("/");
            }).catch(err => {
                alert(err);
            })
    }

    return (
        <div className="NewEmployee">

            <form  id="addbanker" ref={form}>
                <h1>Add a Banker</h1> 

                <label>First Name</label>
                <input type="text"
                    label={'firstName'}
                    name={'firstName'}
                /><br/><br/>

                <label>Last Name</label>
                <input type="text"
                    label={'lastName'}
                    name={'lastName'}
                /><br/><br/>

                <label>Phone Number</label>
                <input type="text"
                    label={'phoneNumber'}
                    name={'phoneNumber'}
                /><br/><br/>

                <label>Email</label>
                <input type="text"
                    label={'email'}
                    name={'email'}
                /><br/><br/>

                <label>Password</label>
                <input type="password"
                    label={'password'}
                    name={'password'}
                /><br/><br/>
                <button  id="addbankerbtn" onClick={saveBanker}>Add Banker</button>
            </form>

        </div>
    );
}
