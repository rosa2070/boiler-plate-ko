import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        useEffect(() => {

            dispatch(auth())
            Axios.get('/api/users/auth')
        }, [])
    }



    return AuthenticationCheck
}