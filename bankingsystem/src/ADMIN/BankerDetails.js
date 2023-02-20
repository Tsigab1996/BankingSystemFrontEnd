import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function BankerDetails(props) {
    const param = useParams();
    const navigate = useNavigate();

    const [bankerObj, setBankerObj] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""

    });

    const getBankerObjById = () => {
        axios.get("http://localhost:8080/api/v1/users/" + param.id)
            .then((res) => {
                setBankerObj(res.data);
            }).catch(() => {
                console.error();
            })
    }

    const deleteBanker = () => {
        axios.delete("http://localhost:8080/api/v1/users/" + param.id)
            .then(() => {
                console.log("successfully deleted")
            }).catch(() => {
                console.log("Not deleted")
            })
    }


    const cancelBanker = () => {
        navigate('/')
    }
    

    const updateBanker = () => {
        navigate("/managebanker/" + param.id);
    }

    useEffect(() => {
        getBankerObjById();
    });

    return (
        <div id="bankerdetails">
            <div>
                <h1>First Name: {bankerObj.firstName}</h1>
                <h1>Last Name:{bankerObj.lastName}</h1>
                <h1>PhoneNumber:{bankerObj.phoneNumber}</h1>
                <h1>Email:{bankerObj.email}</h1>
                <h1>PassWord: {bankerObj.password}</h1>
            </div>

            <div>
                <button id="addbankerbtn" onClick={deleteBanker}>Delete</button>
                <button id="addbankerbtn" onClick={updateBanker}>Manage Banker</button>
                <button id="addbankerbtn" onClick={cancelBanker}>Back</button>
            </div>
        </div>
    )
}
