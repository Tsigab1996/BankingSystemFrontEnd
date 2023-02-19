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

            <form ref={form}>
                <h1>Add a Banker</h1>

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
                <button onClick={saveBanker}>Add Banker</button>
            </form>

        </div>
    );
}
