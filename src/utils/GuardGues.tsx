import * as React from 'react'
import { Route, useNavigate } from "react-router-dom";

type IGUARD = {
    children: any
    rest: any
}

export const GuardRoute = (props: IGUARD) => {

    const navigate = useNavigate()
    const user = true;

    return <Route {...props.rest}>
        {user ? props.children : navigate('/login')}
    </Route>
};

export default GuardRoute;