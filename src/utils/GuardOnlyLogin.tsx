import * as React from 'react'
import { Navigate } from 'react-router-dom'

type IGUARD = {
    component: React.ComponentType
}

export const GuardOnlyLogin: React.FC<IGUARD> = ({ component: RouteComponent }) => {

    const x: string = localStorage.getItem("auth") as string;
    const user = JSON.parse(x)

    if (!user) {
        alert('Anda belum login')
        return <Navigate to="/login" />
    }

    return <RouteComponent />
};
