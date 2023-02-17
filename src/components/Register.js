import React, {useState} from 'react';
import '../styles/Forms.css'
import {useForm} from 'react-hook-form'

const RegisterComponent = () => {

    const [singUp, setRegister] = useState({email: "", login: "", password: "", repeatPW: ""})

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (event) => {
        console.log(event);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='forms'>

                    Email:
                    <br/>
                    <input placeholder='Podaj emial' value={singUp.email}
                    {...register("email", { required: true})}
                    onChange={(event) => {
                        setRegister((prev) => {
                            return {...prev, email: event.target.value}
                        })
                    }} ></input>
                    <br/>
                    

                    Login:
                    <br/>
                    <input placeholder='Podaj login' value={singUp.login}
                    {...register("login", { required: true})}
                    onChange={(event) => {
                        setRegister((prev) => {
                            return {...prev, login: event.target.value}
                        })
                    }} ></input>
                    <br/>

                    Hasło:
                    <br/>
                    <input placeholder='Podaj hasło' type='password' value={singUp.password}
                    {...register("password", { required: true,  minLength: 3})}
                    onChange={(event) => {
                        setRegister((prev) => {
                            return {...prev, password: event.target.value}
                        })
                    }} ></input>
                    <br/>

                    Powtórz hasło:
                    <br/>
                    <input placeholder='Powtórz hasło' type='password' value={singUp.repeatPW}
                    {...register("repeatPW", { required: true})}
                    onChange={(event) => {
                        setRegister((prev) => {
                            return {...prev, repeatPW: event.target.value}
                        })
                    }} ></input>
                    <br/>
                    {(errors.email || errors.login || errors.password || errors.repeatPW)
                    && <p style={{color: 'red'}}>Błędnie wypełniony formularz!</p>}
                    <button>Zatwierdź</button>
                </div>
            </form>
        </>
    );
  }
  
  export default RegisterComponent;