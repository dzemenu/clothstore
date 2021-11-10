import React,{useState} from 'react'
import FormInput from '../form-inut/FormInput'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
const submitHandler= (e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <FormInput type='email' value={email} onChange={handleEmail} label='Email'/>
                <FormInput type='password' value={password} onChange={handlePassword} label='Password'></FormInput>
                <FormInput type='submit' value='submit form'></FormInput>
            </form>
        </div>
    )
}

export default SignIn
