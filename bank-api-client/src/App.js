import react, { useState, useEffect } from 'react'
import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState();
  const [depositUserID, setDepositUserID] = useState();
  const [depositAmount, setDepositAmount] = useState();
  const addUser = async () => {
    axios.post('http://localhost:8000/api/users/', {
      id: userID
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  const depositCash = async () => {
    axios.put(`http://localhost:8000/api/users/depositCash/${depositUserID}`, {
      amount: depositAmount
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  const userChange = (e) => {
    setUserID(e.target.value)
    console.log(userID)
  }
  const depositUserChange = (e) => {
    setDepositUserID(e.target.value)
    console.log(depositUserID)
  }
  const depositChange = (e) => {
    setDepositAmount(e.target.value)
    console.log(depositAmount)
  }
  const getUsers2 = async () => {
    const response = await axios.get('http://localhost:8000/api/users/')
    console.log(response.data)
  }
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:8000/api/users/')
      console.log(response.data)
      setUsers(response.data)
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      {
        users.map(user => {
          return <h1>id:{user.id}, cash:{user.cash}, credit:{user.credit}</h1>
        })
      }
      <label>user ID:</label>
      <input type="text" value={userID} onChange={(e) => userChange(e)} />
      <button onClick={addUser}>add user</button>
      <button onClick={getUsers2}>get users</button><br /><br />
      <label>depositID:</label>
      <input type="text" value={depositUserID} onChange={(e) => depositUserChange(e)} />
      <label>deposit amount:</label>
      <input type="text" value={depositAmount} onChange={(e) => depositChange(e)} />
      <button onClick={depositCash}>deposit</button>
    </div>
  );
}

export default App;
