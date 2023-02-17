import React, {useState} from 'react';
import '../styles/Forms.css'

const LoginComponent = () => {

    const [loginIn, setLogin] = useState({login: "", password: ""})

    const handleSubmit = (event) => {
        event.preventDefault();
        const formsData = {loginIn};

        console.log(formsData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='forms'>
                Login:
                <br/>
                <input placeholder='Podaj login' value={loginIn.login} required
                onChange={(event) => {
                    setLogin((prev) => {
                        return {...prev, login: event.target.value}
                    })
                }} ></input>
                <br/>
                Hasło:
                <br/>
                <input placeholder='Podaj hasło' value={loginIn.password} type='password' required
                onChange={(event) => {
                    setLogin((prev) => {
                        return {...prev, password: event.target.value}
                    })
                }} ></input>
                <br/>
                <button onClick={() => 
                {
                    console.log(JSON.stringify(loginIn))
                }}>Zaloguj</button>
            </div>
        </form>
        </>
    );
  }
  
  export default LoginComponent;