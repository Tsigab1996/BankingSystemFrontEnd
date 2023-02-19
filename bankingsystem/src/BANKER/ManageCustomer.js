import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ManageCustomer() {


    const [updatedCustomer, setUpdatedCustomer] = useState({});

    const param = useParams();
    const navigate = useNavigate();


    let getCustomer = () => {
        axios.get("http://localhost:8080/api/v1/users" + param.id)
            .then((res) => setUpdatedCustomer(res.data)).catch((e) => {
                console.error();
            })
    }


    //Managing or updating banker 
    const handleCustomer = () => {
        const formData = form.current;

        let customerData = {
            firstName: formData['firstName'].value,
            lastName: formData['lastName'].value,
            phoneNumber: formData['phoneNumber'].value,
            email: formData['email'].value,
            password: formData['password'].value,
        }

        axios.put("http://localhost:8080/api/v1/users/update" + param.id, customerData,)
            .then((res) => {
                navigate('/')
            }).catch("Data not updated")
    }


    //This will navigate this page to the home page
    const cancelCustomer = () => {
        navigate('/')
    }

    useEffect(() => {
        getCustomer();
    }, [param.id])




    return (

        <div>
            <form ref={form}>
                <h1>EDIT CUSTOMER</h1>

                <label>First Name: </label>
                <input type="text"
                    label={'firstName'}
                    name={'firstName'}
                    value={updatedCustomer.firstName} onChange={(e) => setUpdatedCustomer(updatedCustomer.firstName = e.target.value)}>
                </input>
                <label>Last Name: </label>
                <input type="text"
                    label={'lastName'}
                    name={'lastName'}
                    value={updatedCustomer.lastName} onChange={(e) => setUpdatedCustomer(updatedCustomer = e.target.value)}>
                </input>
                <label>Phone Number: </label>
                <input type="text"
                    label={'phoneNumber'}
                    name={'phoneNumber'}
                    value={updatedCustomer.phoneNumber} onChange={(e) => setUpdatedCustomer(updatedCustomer.phoneNumber = e.target.value)}>
                </input>
                <label>Email: </label>
                <input type="text"
                    label={'email'}
                    name={'email'}
                    value={updatedCustomer.email} onChange={(e) => setUpdatedCustomer(updatedCustomer.email = e.target.value)}>
                </input>
                <label>Password: </label>
                <input type="text"
                    label={'password'}
                    name={'password'}
                    value={updatedCustomer.password} onChange={(e) => setUpdatedCustomer(updatedCustomer.password = e.target.value)}>
                </input>

                <button onClick={handleCustomer}>update</button>
                <button onClick={cancelCustomer}>Back</button>


            </form>

        </div>
    )
}
