import './App.css';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/home/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(resp => setUsers(resp))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <h3>User List</h3>
      <UserList users={users} />
    </div>
  );
}

export default App;


//   ES7         React/Redux/GraphQL/React-Native snippets
//   rce         for class components 
//   rfce        for functional components 
//   rconst      for constructor