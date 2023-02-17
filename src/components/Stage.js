import React from 'react';
import '../styles/Stage.css'
import LoginComponent from './Login';
import MainComponent from './Main';
import RegisterComponent from './Register';
import {Route, Routes, useNavigate} from 'react-router-dom'

const StageComponent = () => {

  const navigate = useNavigate();

    return (
      <div className='stageDiv'>
        <div className="navbar">
            <div className="home" onClick={() => {navigate("/")}}>TrainYourTrain</div>
            <div className="login" onClick={() => {navigate("/login")}}> Zaloguj się</div>
            <div className="register" onClick={() => {navigate("/register")}}> Rejestracja</div>
        </div>
          <Routes>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/register" element={<RegisterComponent/>}/>
            <Route path="/" element={<MainComponent/>}/>
          </Routes>
      </div>
    );
  }
  
  export default StageComponent;
  