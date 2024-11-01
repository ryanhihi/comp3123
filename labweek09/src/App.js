import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [studentInfo, setStudentInfo] = useState({
    studentId: '101460443',
    name: 'Ryan Tran',
    college: 'George Brown College, Toronto',
  });
;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <p>{studentInfo.studentId}</p>
        <p>{studentInfo.name}</p>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
