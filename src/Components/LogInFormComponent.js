import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Alert, Media, Button} from 'reactstrap'
import image from '../images/Trio-Lash-Logo.png'
import '../styling/style.css'
import {useAuth} from '../Context/AuthContext.js'
import {Navigate} from 'react-router-dom'
import {db} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'

export default function LogInFormComponent(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const {logIn, initUserInfo} = useAuth()
    const navigate = Navigate()

    function handleUserNameChange(event){
        setUserName(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function ButtonHandler(event){
        event.preventDefault()
        try {
            if(userName.length !== 0 && password.length !== 0){
                await logIn(userName, password)
                const docRef = doc(db, 'Users', userName)
                const docSnap = await getDoc(docRef)
    
                if(docSnap.exists() && docSnap.data()){
                    initUserInfo(docSnap.data())
                    navigate.push('/dashboard')
                }
            }
            else{
                setErrorMessage('Please provide username and/or password.')
            }
        }
        catch {
            setErrorMessage('Username and/or password you entered is incorrect. Please try again.')
        }
    }

    return(
        <div>
            <div className='form'>
                <Media className='image' object src={image} alt='NailShop'></Media>
                {errorMessage && <Alert color='danger'>{errorMessage}</Alert>}
                <Form>
                    <FormGroup className='text1'>
                        <Label className='padding5'>Username</Label>
                        <Input value={userName} type='email' onChange={handleUserNameChange}></Input>
                    </FormGroup>
                    <FormGroup className='text1'>
                        <Label className='padding5'>Password</Label>
                        <Input value={password} type='password' onChange={handlePasswordChange}></Input>
                    </FormGroup>
                    <br/><Button color='primary' onClick={ButtonHandler}>SIGN IN</Button>
                </Form>
            </div>
        </div>
    )
}