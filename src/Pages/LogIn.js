import React from 'react'
import LogInFormComponent from '../Components/LogInFormComponent.js'
import {useAuth} from '../Context/AuthContext.js'

export default function LogIn() {
    const currentUser = useAuth()
    const {logOut} = useAuth()
    document.title = "Log In | Nail Shop"

    if(currentUser.currentUser === null || currentUser.currentUser === undefined){
        logOut()
    }

    return(
        <React.Fragment>
            <div className='padding5'>
                <LogInFormComponent></LogInFormComponent>
            </div>
        </React.Fragment>
    )
}